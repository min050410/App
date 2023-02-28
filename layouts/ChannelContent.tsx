import styleConfig from "@/config/style";
import { ReactNode } from "react";

interface FrameProps {
  title: ReactNode;
  datagrid: ReactNode;
}

function Frame({ title, datagrid }: FrameProps) {
  return (
    <section className="flex justify-center min-h-[calc(100vh-5.125rem)]">
      <div className={`pt-10 pb-10 ${styleConfig.desktopWidth}`}>
        <div>{title}</div>
        <div>{datagrid}</div>
      </div>
    </section>
  );
}

export default function ChannelContentLayout(props: FrameProps) {
  return <Frame {...props} />;
}
