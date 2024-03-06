import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Error";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import * as bcrypt from "bcryptjs";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({
        memberType: MemberType.RESTAURANT,
      })
      .exec(); // bu .exec(); methodini qo`ymasa ham, undan oldin ishlatilayotgan mongoose dagi method ishlayveradi.
    // buning vasifasi, undan oldingi methodga qo`shimcha holatda boshqa methodlar qo`shilib kelmasligini bildiradi.
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED); //  Only one restaurant can be created in the system
    console.log("exist:", exist);

    console.log("before:", input.memberPassword);
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    console.log("after:", input.memberPassword);

    try {
      const result = await this.memberModel.create(input); //  회원가입시 비번을 hash화하여 DB에 저장한다.
      // const tempResult = new this.memberModel(input);
      // const result = await tempResult.save();
      console.log("This info is located in Member.service module!");
      result.memberPassword = ""; // 클라이언트로 보내기전에는    비밀번호를 제거해주자!
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      //bcrypt compare qilyapti,
      input.memberPassword,
      member.memberPassword
    );

    console.log("isMatch : ", isMatch);
    console.log("input:", input);
    console.log("input.memberPassword:", input.memberPassword);
    console.log("member:", member);
    console.log("member.memberPassword:", member.memberPassword);
    if (!isMatch) {
      throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
      console.log("Errors: Akmal ", Errors);
    }

    return await this.memberModel.findById(member._id).exec();

    // const result = await this.memberModel.findById(member._id).exec();
    // console.log("result: ", result);
    // console.log(member._id, "=====", result._id);
    console.log("member._id: ", member._id);
    console.log("this.memberModel:", this.memberModel);
    console.log("this.memberModel.schema:", this.memberModel.schema);
    // console.log("await:", await);
    // console.log("login member : ", member);
    // return result;
  }
}

export default MemberService;

// static method nima
// public async processSignup(): Promise<void> {
// console.log(
// "Processing sign up passed here: this info is located in Member.service module!"
// );
// }
// BIZ DOIM METHODLARNI ASYNC KO'RINISHDA YOZAMIZ, CHUNKI DATABASEDAN KO'P MUROJAATLAR BO'LASI.
