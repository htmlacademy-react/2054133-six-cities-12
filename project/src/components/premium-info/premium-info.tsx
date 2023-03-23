type PremiumInfoProps = {
  className: string;
}

function PremiumInfo({className}: PremiumInfoProps): JSX.Element {

  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumInfo;
