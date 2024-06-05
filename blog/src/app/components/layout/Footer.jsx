import Anchor from '../AnchorLink';

function Footer() {
  return (
    <div className="bg-red-600 flex flex-row justify-center align-middle gap-5 p-10">
      <Anchor anchorName={'n!factorial'} />
      <Anchor anchorName={'Github'} />
      <Anchor anchorName={2024} />
    </div>
  );
}

export default Footer;
