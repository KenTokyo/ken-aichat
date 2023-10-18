import Image from "next/image";

const GPTLogo = (props: any) => {
  return (
    <div className="mr-4 ml-5">
      <Image
        width={40}
        height={40}
        className="min-w-[40px]"
        src={props.imgName}
        alt="GPT LOGO"
      />
    </div>
  );
};

export default GPTLogo;
