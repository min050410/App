export interface Member {
  memberId: number;
  name: string;
  profileImageUrl: string;
  email: string;
  introduction: string;
}

export type MemberWithoutIntroduction = Omit<Member, "introduction">;

export interface Token {
  token: string;
  validity: string;
}
