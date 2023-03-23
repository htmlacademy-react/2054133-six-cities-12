type PremiumInfoProp = {
  className: string;
}

function PremiumInfo({className}: PremiumInfoProp): JSX.Element {

  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumInfo;
