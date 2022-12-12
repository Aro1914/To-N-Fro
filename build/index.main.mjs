// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function A(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for A expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for A expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:12:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:12:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v104, time: v103, didSend: v22, from: v102 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v104, time: v103, didSend: v22, from: v102 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v102],
    evt_cnt: 0,
    funcNum: 1,
    lct: v103,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:14:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v107, time: v106, didSend: v27, from: v105 } = txn2;
      
      ;
      const v109 = await ctc.getContractInfo();
      
      const v111 = stdlib.checkedBigNumberify('./index.rsh:17:41:decimal', stdlib.UInt_max, '0');
      const v112 = v106;
      
      if (await (async () => {
        const v122 = stdlib.lt(v111, stdlib.checkedBigNumberify('./index.rsh:19:32:decimal', stdlib.UInt_max, '20'));
        
        return v122;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v107, time: v106, didSend: v27, from: v105 } = txn2;
  ;
  const v108 = stdlib.addressEq(v102, v105);
  stdlib.assert(v108, {
    at: './index.rsh:14:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'A'
    });
  const v109 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.deployed(v109), {
    at: './index.rsh:15:28:application',
    fs: ['at ./index.rsh:15:28:application call to [unknown function] (defined at: ./index.rsh:15:28:function exp)', 'at ./index.rsh:15:28:application call to "liftedInteract" (defined at: ./index.rsh:15:28:application)'],
    msg: 'deployed',
    who: 'A'
    });
  
  let v111 = stdlib.checkedBigNumberify('./index.rsh:17:41:decimal', stdlib.UInt_max, '0');
  let v112 = v106;
  
  let txn3 = txn2;
  while (await (async () => {
    const v122 = stdlib.lt(v111, stdlib.checkedBigNumberify('./index.rsh:19:32:decimal', stdlib.UInt_max, '20'));
    
    return v122;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc1],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v129], secs: v131, time: v130, didSend: v66, from: v128 } = txn4;
    undefined /* setApiDetails */;
    ;
    await txn4.getOutput('call', 'v111', ctc2, v111);
    const v138 = stdlib.eq(v111, stdlib.checkedBigNumberify('./index.rsh:22:38:decimal', stdlib.UInt_max, '19'));
    if (v138) {
      }
    else {
      stdlib.protect(ctc0, await interact.call(), {
        at: './index.rsh:22:57:application',
        fs: ['at ./index.rsh:22:57:application call to [unknown function] (defined at: ./index.rsh:22:57:function exp)', 'at ./index.rsh:22:57:application call to "liftedInteract" (defined at: ./index.rsh:22:57:application)', 'at ./index.rsh:20:39:application call to [unknown function] (defined at: ./index.rsh:20:39:function exp)'],
        msg: 'call',
        who: 'A'
        });
      
      }
    const v141 = stdlib.safeAdd(v111, stdlib.checkedBigNumberify('./index.rsh:23:41:decimal', stdlib.UInt_max, '1'));
    const cv111 = v141;
    const cv112 = v130;
    
    v111 = cv111;
    v112 = cv112;
    
    txn3 = txn4;
    continue;
    
    }
  return;
  
  
  
  
  };
export async function _call4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _call4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _call4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Null;
  
  
  const [v111] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v125 = stdlib.protect(ctc1, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:20:21:application call to [unknown function] (defined at: ./index.rsh:20:21:function exp)', 'at ./index.rsh:20:21:application call to [unknown function] (defined at: ./index.rsh:20:21:function exp)'],
    msg: 'in',
    who: 'call'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v111, v125],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v129], secs: v131, time: v130, didSend: v66, from: v128 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "call"
        });
      ;
      const v133 = await txn1.getOutput('call', 'v111', ctc0, v111);
      
      const v141 = stdlib.safeAdd(v111, stdlib.checkedBigNumberify('./index.rsh:23:41:decimal', stdlib.UInt_max, '1'));
      const v199 = v141;
      const v201 = stdlib.lt(v141, stdlib.checkedBigNumberify('./index.rsh:19:32:decimal', stdlib.UInt_max, '20'));
      if (v201) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v129], secs: v131, time: v130, didSend: v66, from: v128 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v133 = await txn1.getOutput('call', 'v111', ctc0, v111);
  if (v66) {
    stdlib.protect(ctc2, await interact.out(v129, v133), {
      at: './index.rsh:20:22:application',
      fs: ['at ./index.rsh:20:22:application call to [unknown function] (defined at: ./index.rsh:20:22:function exp)', 'at ./index.rsh:21:28:application call to "ret" (defined at: ./index.rsh:20:39:function exp)', 'at ./index.rsh:20:39:application call to [unknown function] (defined at: ./index.rsh:20:39:function exp)'],
      msg: 'out',
      who: 'call'
      });
    }
  else {
    }
  
  const v141 = stdlib.safeAdd(v111, stdlib.checkedBigNumberify('./index.rsh:23:41:decimal', stdlib.UInt_max, '1'));
  const v199 = v141;
  const v201 = stdlib.lt(v141, stdlib.checkedBigNumberify('./index.rsh:19:32:decimal', stdlib.UInt_max, '20'));
  if (v201) {
    return;
    }
  else {
    return;
    }
  
  
  };
export async function call(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for call expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for call expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _call4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`call()uint64`],
    pure: [],
    sigs: [`call()uint64`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAEAAEDBCYCAQAAIjUAMRhBAVYpZEkiWzUBgQhbNQI2GgAXSUEAEiI1BCM1BoG30O6ZBRJEKUIAHDYaAhc1BDYaAzYaARdJIwxAAHdJJAxAAEckEkQlNAESRDQESSISTDQCEhFEKGRJNQMXNf9JNQU1/oAEyJoPuzT+ULCACAAAAAAAAABvNP8WULA0/xY1BzT/IwgyBkIAXSMSRCM0ARJENARJIhJMNAISEUQoZDUDgASai5F0sDQDMQASRCIyBkIAM0iBoI0GiAC8IjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rAxAChLAVcAIGdIIzUBMgY1AkIAPzX/STX+gRQMQQAVNP4WKEsBVwAIZ0glNQEyBjUCQgAfQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIECMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v206","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T1","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"}],"name":"_reach_oe_v111","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v208","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T1","name":"v212","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"call","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062000bf390813803601f1980601f83011683019360018060401b039284861084871117620002c45780859260409788528339602094859181010312620002da578451906200004f82620002df565b5181524360035584518581019080821085831117620002c457859187526000918183809352015260049160ff835416620002ad577f87b51d26f290dc1fb530aed45f92ac77d813efb7cccb67b06c40d875955dde87878051338152835189820152a1518015908115620002a0575b501562000289573462000272578551620000d781620002df565b3390526001948582554386558651923382850152818452878401848110878211176200025f57885283519586116200024c57600254908782811c9216801562000241575b838310146200022e5750601f8111620001e2575b508093601f86116001146200017a575050918394918493946200016e575b50501b916000199060031b1c1916176002555b516108f79081620002fc8239f35b0151925038806200014d565b600283528183209493928692918316915b88838310620001c75750505010620001ad575b505050811b0160025562000160565b015160001960f88460031b161c191690553880806200019e565b8587015188559096019594850194879350908101906200018b565b60028352818320601f870160051c81019183881062000223575b601f0160051c019087905b828110620002175750506200012f565b84815501879062000207565b9091508190620001fc565b634e487b7160e01b845260229052602483fd5b91607f16916200011b565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b855163100960cb60e01b8152600981840152602490fd5b855163100960cb60e01b8152600881840152602490fd5b90506001541438620000bd565b865163100960cb60e01b8152600781850152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b602081019081106001600160401b03821117620002c45760405256fe608060408181526004918236101561001f575b505050361561001d57005b005b600092833560e01c9182631e93b0f11461045b5750816328b5e32b146103fd578163573b8510146101565781638323075714610137578163889345b8146100df575063ab53f2c6146100715780610012565b346100db57816003193601126100db57815461008b6104fd565b91805193849283526020828185015284518093850152815b8381106100c457505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016100a3565b5080fd5b8383806003193601126100db578051926100f8846104e2565b82845282602085015281519061010d826104e2565b35815260243580151581036101335793816020958661012d9401526105db565b51908152f35b8380fd5b5050346100db57816003193601126100db576020906001549051908152f35b8383602092836003193601126103f95782848351610173816104e2565b8281520152815190610184826104b1565b8035825260ff8154166103e2577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee81596838051338152845188820152a1600191828554036103cb576101d26104fd565b9086828051810103126103c757868551926101ec846104b1565b01516001600160a01b03919082811681036103c35783525180159081156103b8575b50156103a1573461038a57339151160361037357825161022d816104e2565b8481524386820152835190610241826104b1565b8582525180915281855543835583519086820152858152610261816104e2565b8051916001600160401b038311610360575061027e600254610477565b601f8111610326575b508590601f83116001146102c55792829391839287946102ba575b50501b916000199060031b1c19161760025551908152f35b0151925087806102a2565b60028652868620919083601f198116885b8a8883831061030f57505050106102f6575b505050811b0160025561012d565b015160001960f88460031b161c191690558580806102e8565b8686015188559096019594850194879350016102d6565b6103509060028752878720601f850160051c810191898610610356575b601f0160051c01906105c4565b86610287565b9091508190610343565b634e487b7160e01b865260419052602485fd5b602490600e84519163100960cb60e01b8352820152fd5b845163100960cb60e01b8152600d81850152602490fd5b845163100960cb60e01b8152600c81850152602490fd5b90508454148861020e565b8780fd5b8580fd5b835163100960cb60e01b8152600b81840152602490fd5b602490600a84519163100960cb60e01b8352820152fd5b8280fd5b5050816003193601126100db57602091610453825161041b816104e2565b82815284810192808452845190610431826104b1565b808252855191610440836104e2565b87830191808352835251151590526105db565b519051908152f35b8490346100db57816003193601126100db576020906003548152f35b90600182811c921680156104a7575b602083101461049157565b634e487b7160e01b600052602260045260246000fd5b91607f1691610486565b602081019081106001600160401b038211176104cc57604052565b634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176104cc57604052565b60405190600060025461050f81610477565b8085526001918083169081156105a5575060011461054d575b5050829003601f01601f191682016001600160401b038111838210176104cc57604052565b600260009081526020935091837f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5b83851061059157505050508301013880610528565b80548886018301529301928490820161057c565b919250506020925060ff191682850152151560051b8301013880610528565b8181106105cf575050565b600081556001016105c4565b60049060ff8254166108d2576040928351933385527f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c660608451966020978882015287860151151584820152a1600091848354036108bb5761063b6104fd565b9386858051810103126101335786835195610655876104b1565b015185525180159081156108af575b50156108985734610881577fa9ef2c5057b39379f95a1a0413281fcd8d70b9692a777228b270239ce63602fb8685518451908152a18584519101528051906106ab826104e2565b82825285820193838552516001948582019182811161086e57821061086a5781845243905260141115610806578051916106e4836104b1565b83835251809252848355438455519085820152848152610703816104e2565b8051936001600160401b0385116107f35750610720600254610477565b601f81116107c4575b508491601f8511600114610763579394508492919083610758575b50501b916000199060031b1c191617600255565b015192503880610744565b6002815285812093958591601f198316915b888383106107aa5750505010610791575b505050811b01600255565b015160001960f88460031b161c19169055388080610786565b858701518855909601959485019487935090810190610775565b6107ed9060028452868420601f870160051c81019188881061035657601f0160051c01906105c4565b38610729565b634e487b7160e01b835260419052602482fd5b505080809493505582815561081c600254610477565b80610828575b50505050565b601f8111600114610843575050506002555b38808080610822565b61085e9160028552601f848620920160051c820191016105c4565b8120816002555561083a565b8480fd5b634e487b7160e01b865260118852602486fd5b815163100960cb60e01b8152601281870152602490fd5b815163100960cb60e01b8152601181870152602490fd5b90506001541438610664565b815163100960cb60e01b8152601081870152602490fd5b60405163100960cb60e01b8152600f81840152602490fdfea164736f6c6343000810000a`,
  BytecodeLen: 3059,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:13:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:26:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:17:39:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "A": A,
  "call": call
  };
export const _APIs = {
  call: call
  };
