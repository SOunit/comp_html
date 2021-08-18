// data [number, quantities, value]
const p_val = [["1", 12, 6500],
  ["2", 24, 12000], 
  ["3", 48, 23000], 
  ["4", 96, 45000]];

const choose_pcs_id = document.getElementById("choose-pcs-id");
const value = choose_pcs_id.value;
const set_val = document.getElementById("output-val");

// initialize
document.getElementById('output-val').innerHTML = "￥" + p_val[0][2].toLocaleString()
      + "（about ￥" + Math.round(p_val[0][2]/p_val[0][1]) + "per piece）";

choose_pcs_id.addEventListener('change', (e) => {
  for (i=0; i<p_val.length; i++) {
    if (e.target.value === p_val[i][0]) {
      document.getElementById('output-val').innerHTML = "￥" + p_val[i][2].toLocaleString()
        + "（about ￥" + Math.round(p_val[i][2]/p_val[i][1]) + "per piece）";
    }
  }
});