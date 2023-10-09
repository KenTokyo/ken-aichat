interface GPTLogoProps {
  imgName: string;
}

const GPTLogo: React.FC<GPTLogoProps> = ({ imgName }) => {
  return (
    <div className="mr-4 ml-5">
      <img className="min-w-[40px] w-[40px]" src={imgName} alt="GPT LOGO" />
    </div>
  );
};

export default GPTLogo;
