const choose_pcs_id = document.getElementById("choose-pcs-id");
const value = choose_pcs_id.value;
const set_val = document.getElementById("output-val");
choose_pcs_id.addEventListener('change', (e) => {
  if (e.target.value === "1") {
    document.getElementById('output-val').innerHTML = "￥6500（about ￥542 per piece）";
  } else if (e.target.value === "2") {
    document.getElementById('output-val').innerHTML = "￥12000（about ￥500 per piece）";
  } else if (e.target.value === "3") {
    document.getElementById('output-val').innerHTML = "￥23000（about ￥479 per piece）";
  } else if (e.target.value === "4") {
    document.getElementById('output-val').innerHTML = "￥45000（about ￥469 per piece）";
  }
});