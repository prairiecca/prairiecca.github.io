// @ts-ignore
import UsaMap from "react-usa-map";

const NotValidCustom = {
  WI: {fill: "#fcecac"},
  WA: {fill: "#cd2500"},
  OR: {fill: "#cd2500"},
  CA: {fill: "#cd2500"},
  NM: {fill: "#cd2500"},
  MN: {fill: "#cd2500"},
  IL: {fill: "#cd2500"},
  SC: {fill: "#cd2500"},
  HI: {fill: "#cd2500"},
  PR: {fill: "#cd2500"},
  NY: {fill: "#cd2500"},
  CT: {fill: "#cd2500"},
  MA: {fill: "#cd2500"},
  NJ: {fill: "#cd2500"},
  MD: {fill: "#cd2500"},
  RI: {fill: "#cd2500"},
  DE: {fill: "#cd2500"},
  DC2: {fill: "#cd2500"},
}
export default ()=> {
  return (
    <p className="PermitMap-holder">
      <UsaMap
        defaultFill='#ffcc00'
        customize={NotValidCustom}
      />
      <div>
        <span style={{paddingRight:'8px'}}><div className="legend valid"/> Permit honored</span>
        <span><div className="legend invalid"/> Permit not honored</span>
      </div>
    </p>
  )
}