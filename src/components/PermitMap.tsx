// @ts-ignore
import UsaMap from "react-usa-map";

const NotValidCustom = {
  WI: {fill: "#9fc996"},
  WA: {fill: "#080F08"},
  OR: {fill: "#080F08"},
  CA: {fill: "#080F08"},
  NM: {fill: "#080F08"},
  MN: {fill: "#080F08"},
  IL: {fill: "#080F08"},
  SC: {fill: "#080F08"},
  HI: {fill: "#080F08"},
  PR: {fill: "#080F08"},
  NY: {fill: "#080F08"},
  CT: {fill: "#080F08"},
  MA: {fill: "#080F08"},
  NJ: {fill: "#080F08"},
  MD: {fill: "#080F08"},
  RI: {fill: "#080F08"},
  DE: {fill: "#080F08"},
  DC2: {fill: "#080F08"},
}
export default ()=> {
  return (
    <p className="PermitMap-holder">
      <UsaMap
        defaultFill='#1c4014'
        customize={NotValidCustom}
      />
      <div>
        <span style={{paddingRight:'8px'}}><div className="legend valid"/> Permit honored</span>
        <span><div className="legend invalid"/> Permit not honored</span>
      </div>
    </p>
  )
}