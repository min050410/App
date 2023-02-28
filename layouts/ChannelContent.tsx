import { ReactNode } from "react";

interface FrameProps {
  title: ReactNode;
  datagrid: ReactNode;
}

function Frame({ title, datagrid }: FrameProps) {
  return (
    <section className="px-[8.25rem] pt-10 pb-10 min-h-[calc(100vh-5.125rem)]">
      <div>{title}</div>
      <div>{datagrid}</div>
    </section>
  );
}

export default function ChannelContentLayout(props: FrameProps) {
  return <Frame {...props} />;
}
