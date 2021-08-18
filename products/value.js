const p_val = [{'num':"1", 'qty': 12, 'value': 6500},
  {'num':"2", 'qty': 24, 'value': 12000},
  {'num':"3", 'qty': 48, 'value': 23000},
  {'num':"4", 'qty': 96, 'value': 45000},
];

const choose_pcs_id = document.getElementById("choose-pcs-id");
const value = choose_pcs_id.value;
const set_val = document.getElementById("output-val");

// initialize
document.getElementById('output-val').innerHTML = "￥" + p_val[0].value.toLocaleString()
      + "（about ￥" + Math.round(p_val[0].value/p_val[0].qty) + " per piece）";

choose_pcs_id.addEventListener('change', (e) => {
  for (i=0; i<p_val.length; i++) {
    if (e.target.value === p_val[i].num) {
      document.getElementById('output-val').innerHTML = "￥" + p_val[i].value.toLocaleString()
        + "（about ￥" + Math.round(p_val[i].value/p_val[i].qty) + " per piece）";
    }
  }
});