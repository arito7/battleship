(()=>{var e={742:(e,t,r)=>{const o=r(687);e.exports=()=>{let e=Array(10).fill(Array(10).fill(0));const t=(t,r)=>void 0!==e[t]&&void 0!==e[t][r];return{placeShip:(r,n,l,s=0)=>{const i=[...e],c=o(l);for(let o=0;o<l;o+=1)if(0===s){if(!t(r+o,n)||0!==e[r+o][n])return!1;i[r+o][n]=c}else if(1===s){if(!t(r,n+o)||0!==e[r][n+o])return!1;i[r][n+o]=c}return e=i,!0},receiveAttack:(r,o)=>{if(t(r,o)){if(0!==e[r][o])return e[r][o].hit(),!0;e[r][o]=1}return!1},missedAttacks:()=>{const t=[];for(let r=0;r<10;r+=1)for(let o=0;o<10;o+=1)1===e[r][o]&&t.push({x:r,y:o});return t},allShipsSunk:()=>{for(let t=0;t<10;t+=1)for(let r=0;r<10;r+=1)if(e[t][r].length&&!e[t][r].isSunk())return!1;return!0}}}},4:(e,t,r)=>{const o=r(742);e.exports=()=>({...o()})},687:e=>{e.exports=e=>{let t=e;return{length:e,hit:()=>!!t&&(t-=1,!0),isSunk:()=>!t}}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,r),l.exports}(()=>{const e=r(4);(()=>{e(),e();const t=document.querySelector(".playerField > .board"),r=document.querySelector(".enemyField > .board");console.log(r),console.log(t),(()=>{for(let e=0;e<100;e+=1){const e=document.createElement("div");e.classList.add("cell"),t.appendChild(e);const o=document.createElement("div");o.classList.add("cell"),r.appendChild(o)}})()})()})()})();