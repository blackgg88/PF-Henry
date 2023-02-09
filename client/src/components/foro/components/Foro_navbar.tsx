import logo from "../../assets/logo_smart_b.png";

export default function Foro_navbar() {
  return (
    <>
      <img src={logo} />
      <div>
        <label htmlFor="">Search bar</label>
        <input type="text" />
      </div>
      <div>
        <button>Create post</button>
      </div>
      <div>User info</div>
    </>
  );
}
