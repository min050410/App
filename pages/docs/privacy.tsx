import config from "@/config";
import Head from "next/head";

const privacyText = `
개인정보보호법에 따라 ${config.serviceName}에 회원가입 신청하시는 분께 수집하는
개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간,
동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은
후 동의하여 주시기 바랍니다. 
      
1. 이용자가 포트폴리오 업로드, 마이페이지, 팔로우, 좋아요 등과 같이
개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우,
${config.serviceName}는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.
회원가입 시점에 ${config.serviceName}가 이용자로부터 수집하는 개인정보는 아래와
같습니다. 

- 회원 가입 시 필수항목으로 이메일, 프로필사진, 이름, 휴대전화번호를, 
선택항목으로 학년, 반, 번호, 입학년도를 수집합니다. 

- 서비스 이용 과정에서 IP 주소, 쿠키, 서비스 이용 기록, 기기정보, 위치정보가 
생성되어 수집될 수 있습니다. 

2. 수집한 개인정보의 이용 ${config.serviceName} 서비스(모바일 웹 포함)의 회원관리,
서비스 개발・제공 및 향상, 안전한 인터넷 이용환경 구축 등 아래의 목적으로만
개인정보를 이용합니다. 

- 회원 가입 의사의 확인, 이용자 및 법정대리인의 본인 확인, 이용자 식별, 
회원탈퇴 의사의 확인 등 회원관리를 위하여 개인정보를 이용합니다. 
- 법령 및 ${config.serviceName} 이용약관을 위반하는 회원에 대한 이용 제한 조치, 
부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 
및 제재, 계정도용 및 부정거래 방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 
위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다. 

- 서비스 이용기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 
맞춤 서비스 제공 및 광고 게재 등에 개인정보를 이용합니다. 

- 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 
서비스 이용환경 구축을 위해 개인정보를 이용합니다. 

3. 개인정보의 보관기간 회사는 원칙적으로 이용자의 개인정보를 회원 탈퇴 시 
지체없이 파기하고 있습니다. 

참고로 ${config.serviceName}는 ‘개인정보 유효기간제’에 따라 1년간 서비스를 이용하지 
않은 회원의 개인정보를 별도로 분리 보관하여 관리하고 있습니다. 

4. 개인정보 수집 및 이용 동의를 거부할 권리 

이용자는 개인정보의 수집 및 이용 동의를 거부할 권리가 있습니다.
회원가입 시 수집하는 최소한의 개인정보, 즉, 필수 항목에 대한 수집 및 이용
동의를 거부하실 경우, 회원가입이 어려울 수 있습니다.  

`;
export default function Home() {
  return (
    <>
      <Head>
        <title>BSSM SH</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center ">
        <pre>{privacyText}</pre>
      </div>
    </>
  );
}
