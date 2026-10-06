export default function Logo() {
  return (
    <div className="logo" aria-label="DataGate Eco-system">
      <img
        className="logo-mark"
        src="/favicon.png"
        alt=""
        width={80}
        height={80}
        draggable={false}
      />
      <div className="logo-wordmark">
        <span className="logo-name">
          Data<span>Gate</span>
        </span>
        <span className="logo-sub">Eco-system</span>
        <span className="logo-accent" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}
