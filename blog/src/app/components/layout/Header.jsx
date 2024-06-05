import Anchor from '../AnchorLink';

function Header() {
  return (
    <div className="flex justify-between p-4 text-white bg-red-600">
      <h1 className="text-sm md:text-lg lg:text-lg">Blog</h1>
      <div className="flex gap-4 text-sm md:text-lg lg:text-lg">
        <Anchor anchorName={'Homepage'} />
        <Anchor anchorName={'Posts'} />
        <Anchor anchorName={'About us'} />
      </div>
    </div>
  );
}

export default Header;
