import { useState } from "react";
import scrollUp from "../../assets/images/buttons/arrow-up-2-svgrepo-com.svg";

export default function ScrollUp({ refUse }: any) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = refUse.current?.scrollTop;
    if (scrolled && scrolled > 300) setVisible(true);
    else if (scrolled && scrolled <= 300) setVisible(false);
  };

  const scrollToTop = () => {
    refUse?.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setVisible(false);
  };

  refUse.current?.addEventListener("scroll", toggleVisible);

  return (
    <button
      className='buttonUp'
      onClick={scrollToTop}
      style={{
        display: visible ? "inline" : "none",
      }}
    >
      <img src={scrollUp} />
    </button>
  );
}
