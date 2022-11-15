const Head = <div className='h-12 w-12 border-8 rounded-full border-black absolute top-12 -right-5' />;
const Body = <div className='h-28 w-2  bg-black absolute top-24 right-0' />;
const RightArm = <div className='h-2 w-24  bg-black absolute top-32 -right-24 -rotate-45 origin-bottom-left' />;
const LeftArm = <div className='h-2 w-24  bg-black absolute top-32 right-2 rotate-45 origin-bottom-right' />;
const RightLeg = <div style={{ right: "-90px" }} className='h-2 w-24  bg-black absolute top-48  rotate-45 origin-bottom-left' />;
const LeftLeg = <div className='h-2 w-24  bg-black absolute top-48 right-0 -rotate-45 origin-bottom-right' />;

export default function HangmanDrawing() {
  return (
    <div className='relative'>
      {Head}
      {Body}
      {RightArm}
      {LeftArm}
      {RightLeg}
      {LeftLeg}
      <div className='h-12 w-2 bg-black absolute top-0 right-0' />
      <div className='h-2 w-48 bg-black ml-32' />
      <div className='h-96 w-2 bg-black ml-32' />
      <div className='h-2 w-64  bg-black' />
    </div>
  );
}
