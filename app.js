const PROGRAMAS = [
  {
    id:'iniciante',
    nome:'Iniciante — ABAB',
    descricao:'4x por semana · Hipertrofia · Foco em técnica',
    treinos:{
      A:{nome:'Treino A',foco:'Peito · Ombro · Tríceps',ex:[
        {n:'Supino Reto com Halteres',m:'Peitoral',s:3,r:'10–12',d:90,c:'2s descendo / 1s subindo',ex:'Deite no banco, pés firmes, cotovelos a 45°. Empurre sem trancar.',err:'Cotovelos muito abertos, levantar o quadril, descer rápido.',dca:'Comece com halteres leves focando na técnica.'},
        {n:'Crucifixo com Halteres',m:'Peitoral externo',s:3,r:'12',d:60,c:'2s abrindo / 1s fechando',ex:'Braços levemente flexionados, desce até sentir alongamento, sobe como abraçar uma árvore.',err:'Descer demais sobrecarregando o ombro, trancar cotovelos.',dca:null},
        {n:'Desenvolvimento com Halteres',m:'Deltoide (ombro)',s:3,r:'10–12',d:90,c:'2s descendo / 1s subindo',ex:'Sentado com costas apoiadas, halteres na altura das orelhas, empurre para cima.',err:'Arquear as costas, levar halteres à frente do rosto.',dca:null},
        {n:'Elevação Lateral com Halteres',m:'Deltoide médio',s:3,r:'12–15',d:60,c:'2s subindo / 2s descendo',ex:'Em pé, cotovelos levemente flexionados, eleve até a altura dos ombros.',err:'Usar balanço do corpo, subir acima dos ombros, carga excessiva.',dca:null},
        {n:'Tríceps Pulley (cabo)',m:'Tríceps',s:3,r:'12',d:60,c:'1s descendo / 2s voltando',ex:'Cotovelos fixos ao lado do corpo, estenda completamente para baixo, volte devagar.',err:'Mover os cotovelos, usar o corpo para ajudar.',dca:null},
        {n:'Tríceps Testa com Halteres',m:'Tríceps cabeça longa',s:3,r:'12',d:60,c:'2s descendo / 1s subindo',ex:'Deitado, dobre apenas os cotovelos trazendo os halteres perto da testa.',err:'Mover os ombros, descer os halteres rápido.',dca:null}
      ]},
      B:{nome:'Treino B',foco:'Costas · Bíceps · Pernas',ex:[
        {n:'Puxada Frontal (Pulley)',m:'Dorsal',s:3,r:'10–12',d:90,c:'2s subindo / 1s puxando',ex:'Pegada larga, puxe até o queixo contraindo as escápulas. Controle a volta.',err:'Jogar o corpo para trás, não completar a amplitude.',dca:null},
        {n:'Remada Baixa (cabo)',m:'Dorsal e Romboides',s:3,r:'12',d:90,c:'1s puxando / 2s voltando',ex:'Costas eretas, puxe o cabo em direção ao abdômen espremendo as escápulas.',err:'Arredondar as costas, usar balanço do tronco.',dca:null},
        {n:'Rosca Direta com Halteres',m:'Bíceps',s:3,r:'12',d:60,c:'1s subindo / 2s descendo',ex:'Cotovelos fixos ao lado do corpo, flexione alternado ou simultâneo. Desça devagar.',err:'Balançar o corpo, não completar a amplitude.',dca:null},
        {n:'Agachamento Livre',m:'Quadríceps · Glúteos · Posteriores',s:3,r:'12',d:90,c:'2s descendo / 1s subindo',ex:'Pés na largura dos ombros, desça como sentar numa cadeira, costas retas.',err:'Joelhos para dentro, calcanhar levantando, tronco caindo.',dca:'Comece sem carga ou com halteres leves.'},
        {n:'Leg Press 45°',m:'Quadríceps e Glúteos',s:3,r:'12–15',d:90,c:'2s descendo / 1s subindo',ex:'Pés na largura dos ombros na plataforma, 90° nos joelhos, empurre sem trancar.',err:'Joelhos colapsando para dentro, tirar o glúteo da plataforma.',dca:null},
        {n:'Cadeira Extensora',m:'Quadríceps',s:3,r:'15',d:60,c:'1s subindo / 2s descendo',ex:'Joelho alinhado ao eixo da máquina, estenda completamente, desça devagar.',err:'Carga excessiva, não controlar a descida.',dca:null},
        {n:'Panturrilha em Pé',m:'Gastrocnêmio',s:3,r:'15–20',d:45,c:'1s subindo / 2s descendo / 1s pausa',ex:'Suba na ponta dos pés, desça além do nível do step para sentir o alongamento.',err:'Subir rápido, não completar a amplitude.',dca:null}
      ]}
    }
  },
  {
    id:'upper-lower',
    nome:'Upper / Lower',
    descricao:'4x por semana · Seg/Ter/Qui/Sex · Mais variedade',
    treinos:{
      UA:{nome:'Upper A',foco:'Peito · Costas · Bíceps',ex:[
        {n:'Supino Reto com Halteres',m:'Peitoral',s:4,r:'10–12',d:90,c:'2s descendo / 1s subindo',ex:'Deite no banco, pés firmes, cotovelos a 45°. Empurre sem trancar os cotovelos.',err:'Cotovelos muito abertos, levantar o quadril, descer rápido.',dca:'Priorize técnica perfeita com halteres leves antes de aumentar a carga.'},
        {n:'Remada Curvada com Halteres',m:'Dorsal e Romboides',s:4,r:'10–12',d:90,c:'1s subindo / 2s descendo',ex:'Incline o tronco a 45°, costas retas, puxe os halteres em direção ao quadril espremendo as escápulas.',err:'Arredondar as costas, usar balanço do tronco, não completar a amplitude.',dca:'Mantenha o core ativado para proteger a lombar.'},
        {n:'Supino Inclinado com Halteres',m:'Peitoral superior',s:3,r:'12',d:75,c:'2s descendo / 1s subindo',ex:'Banco a 30–45°, halteres na altura do peitoral superior, cotovelos a 45°.',err:'Banco muito inclinado, arqueamento excessivo da lombar.',dca:'Use o ângulo mais baixo (30°) para menor sobrecarga no ombro.'},
        {n:'Puxada Frontal (Pulley)',m:'Dorsal',s:3,r:'12',d:75,c:'1s puxando / 2s voltando',ex:'Pegada larga, puxe a barra até o queixo contraindo as escápulas. Controle a volta.',err:'Jogar o corpo para trás, não contrair a escápula, pegada muito larga.',dca:null},
        {n:'Rosca Direta com Halteres',m:'Bíceps',s:3,r:'12',d:60,c:'1s subindo / 2s descendo',ex:'Cotovelos fixos ao lado do corpo, flexione alternado. Desça devagar sentindo a tensão.',err:'Balançar o corpo, não completar a amplitude, descer rápido.',dca:null},
        {n:'Rosca Martelo com Halteres',m:'Bíceps cabeça longa e Braquial',s:3,r:'12',d:60,c:'1s subindo / 2s descendo',ex:'Pegada neutra (polegar para cima), cotovelos fixos, flexione alternado.',err:'Girar o punho durante o movimento, usar carga excessiva.',dca:null}
      ]},
      LA:{nome:'Lower A',foco:'Quadríceps · Glúteos · Panturrilha',ex:[
        {n:'Agachamento Livre',m:'Quadríceps · Glúteos · Posteriores',s:4,r:'10–12',d:120,c:'2s descendo / 1s subindo',ex:'Pés na largura dos ombros, desça como sentar numa cadeira, joelhos acompanham os pés, costas retas.',err:'Joelhos para dentro, calcanhar levantando, tronco caindo muito para frente.',dca:'Comece com halteres leves ou apenas peso corporal, focando na técnica.'},
        {n:'Leg Press 45°',m:'Quadríceps e Glúteos',s:4,r:'12–15',d:90,c:'2s descendo / 1s subindo',ex:'Pés na largura dos ombros na plataforma, desça até 90° nos joelhos, empurre sem trancar.',err:'Joelhos colapsando para dentro, tirar o glúteo da plataforma, trancar os joelhos.',dca:null},
        {n:'Cadeira Extensora',m:'Quadríceps',s:3,r:'15',d:60,c:'1s subindo / 2s descendo',ex:'Joelho alinhado ao eixo da máquina. Estenda completamente e desça devagar.',err:'Carga excessiva, não controlar a descida, joelho fora do eixo.',dca:null},
        {n:'Afundo com Halteres (Lunge)',m:'Quadríceps · Glúteos · Posteriores',s:3,r:'10 por perna',d:75,c:'2s descendo / 1s subindo',ex:'Passo largo à frente, desça o joelho traseiro próximo ao chão, joelho da frente não ultrapassa o pé.',err:'Joelho da frente colapsando, tronco inclinando demais para frente.',dca:'Faça sem carga nas primeiras semanas para aprender o equilíbrio.'},
        {n:'Panturrilha em Pé',m:'Gastrocnêmio',s:4,r:'15–20',d:45,c:'1s subindo / 2s descendo / 1s pausa',ex:'Suba na ponta dos pés completamente, desça além do nível do step para sentir o alongamento.',err:'Subir rápido, não completar a amplitude, carga excessiva.',dca:null}
      ]},
      UB:{nome:'Upper B',foco:'Ombro · Costas · Tríceps',ex:[
        {n:'Desenvolvimento com Halteres',m:'Deltoide (ombro)',s:4,r:'10–12',d:90,c:'2s descendo / 1s subindo',ex:'Sentado com costas apoiadas, halteres na altura das orelhas, empurre para cima sem juntar no topo.',err:'Arquear as costas, levar os halteres à frente do rosto.',dca:'Costas sempre encostadas no banco, sem compensar com a lombar.'},
        {n:'Remada Baixa no Cabo',m:'Dorsal e Romboides',s:4,r:'12',d:90,c:'1s puxando / 2s voltando',ex:'Sentado, costas eretas, puxe o cabo em direção ao abdômen espremendo as escápulas. Volte devagar.',err:'Arredondar as costas, usar balanço do tronco, encolher os ombros.',dca:null},
        {n:'Elevação Lateral com Halteres',m:'Deltoide médio',s:3,r:'12–15',d:60,c:'2s subindo / 2s descendo',ex:'Em pé, cotovelos levemente flexionados, eleve os braços até a altura dos ombros.',err:'Usar balanço do corpo, subir acima dos ombros, carga excessiva.',dca:null},
        {n:'Puxada Supinada (Pulley)',m:'Dorsal inferior e Bíceps',s:3,r:'12',d:75,c:'1s puxando / 2s voltando',ex:'Pegada supinada (palmas para você) na largura dos ombros, puxe até o queixo contraindo o dorsal.',err:'Jogar o corpo para trás, usar muito bíceps, não contrair o dorsal.',dca:null},
        {n:'Tríceps Pulley (cabo)',m:'Tríceps',s:3,r:'12',d:60,c:'1s descendo / 2s voltando',ex:'Cotovelos fixos ao lado do corpo, estenda os braços para baixo completamente, volte devagar.',err:'Mover os cotovelos, usar o peso do corpo para ajudar.',dca:null},
        {n:'Tríceps Testa com Halteres',m:'Tríceps cabeça longa',s:3,r:'12',d:60,c:'2s descendo / 1s subindo',ex:'Deitado, dobre apenas os cotovelos trazendo os halteres perto da testa, estenda.',err:'Mover os ombros, descer os halteres rápido.',dca:null}
      ]},
      LB:{nome:'Lower B',foco:'Posteriores · Glúteos · Core',ex:[
        {n:'Stiff com Halteres',m:'Posteriores e Glúteos',s:4,r:'10–12',d:120,c:'2s descendo / 1s subindo',ex:'Em pé, incline o tronco empurrando o quadril para trás, joelhos levemente flexionados, costas retas. Desça até sentir o alongamento, suba contraindo o glúteo.',err:'Arredondar a lombar, dobrar muito os joelhos, não empurrar o quadril para trás.',dca:'Use cargas leves e foque muito na posição da lombar. Pare se sentir dor lombar.'},
        {n:'Cadeira Flexora',m:'Isquiotibiais (posteriores)',s:4,r:'12–15',d:75,c:'1s flexionando / 2s descendo',ex:'Deitado na máquina, joelho alinhado ao eixo, flexione completamente e desça devagar.',err:'Levantar o quadril, carga excessiva, não controlar a descida.',dca:null},
        {n:'Glúteo no Cabo (Kickback)',m:'Glúteo máximo',s:3,r:'15 por perna',d:60,c:'1s subindo / 2s descendo',ex:'De frente para o cabo baixo, anklet no tornozelo, empurre a perna para trás contraindo o glúteo no topo.',err:'Girar o quadril para compensar, carga excessiva, joelho bloqueado.',dca:null},
        {n:'Avanço Reverso com Halteres',m:'Glúteos e Posteriores',s:3,r:'10 por perna',d:75,c:'2s descendo / 1s subindo',ex:'Em pé, dê um passo grande para trás, desça o joelho traseiro próximo ao chão, joelho da frente a 90°.',err:'Passo muito curto, joelho da frente colapsando, tronco inclinado demais.',dca:'Prefira o lunge reverso ao frontal — mais fácil de equilibrar e mais seguro.'},
        {n:'Panturrilha Sentado',m:'Sóleo (panturrilha profunda)',s:4,r:'15–20',d:45,c:'1s subindo / 2s descendo / 1s pausa',ex:'Sentado com joelhos a 90°, peso sobre os joelhos, suba na ponta dos pés e desça além do neutro.',err:'Amplitude incompleta, não pausar embaixo.',dca:null},
        {n:'Prancha Abdominal',m:'Core completo',s:3,r:'30–45 seg',d:45,c:'Isométrico — respire normalmente',ex:'Apoio nos antebraços e pontas dos pés, corpo reto, core contraído, sem elevar nem baixar o quadril.',err:'Quadril muito alto ou baixo, prender a respiração, olhar para cima.',dca:'Excelente para adolescentes — fortalece o core sem carga axial na coluna.'}
      ]}
    }
  }
];

let st = {
  user:null, pag:'treino', treinoAtivo:'A',
  hist:[], cargas:{}, exp:new Set(),
  progAtivo:'iniciante',
  timer:{seg:90,total:90,rodando:false,iv:null}
};

const STORAGE_KEY = 'treino-familia-dados';

function load(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){const d=JSON.parse(raw);if(d.hist)st.hist=d.hist;if(d.cargas)st.cargas=d.cargas;if(d.progAtivo)st.progAtivo=d.progAtivo;}
  }catch(e){}
  const tabs=getTabs();
  if(!tabs.includes(st.treinoAtivo))st.treinoAtivo=tabs[0];
  renderAll();
}

function save(){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify({hist:st.hist,cargas:st.cargas,progAtivo:st.progAtivo}));}catch(e){}
}

function selUser(u){
  st.user=u;
  ['stevan','amanda','caio'].forEach(id=>document.getElementById('chip-'+id).classList.toggle('active',id===u));
  document.getElementById('streak-pill').style.display='flex';
  document.getElementById('streak-val').textContent=calcSemanas(u);
  renderAll();
}

function mudarPag(p){
  st.pag=p;
  ['treino','timer','hist','prog','config'].forEach(id=>{
    document.getElementById('page-'+id).style.display=id===p?'block':'none';
    document.getElementById('bnav-'+id).classList.toggle('active',id===p);
  });
  renderAll();
}

function getProg(){return PROGRAMAS.find(p=>p.id===st.progAtivo)||PROGRAMAS[0];}
function getTabs(){return Object.keys(getProg().treinos);}
function getTreino(){const prog=getProg();return prog.treinos[st.treinoAtivo]||Object.values(prog.treinos)[0];}

function renderAll(){
  if(st.pag==='treino')renderTreino();
  if(st.pag==='hist')renderHist();
  if(st.pag==='prog')renderProg();
  if(st.pag==='config')renderConfig();
}

function renderTreino(){
  const el=document.getElementById('treino-body');
  const u=st.user;
  if(!u){el.innerHTML='<div class="empty" style="padding-top:3rem"><i class="ti ti-users" aria-hidden="true"></i>Selecione quem vai treinar</div>';return;}
  const prog=getProg();const tabs=getTabs();const t=getTreino();
  const hoje=new Date().toDateString();
  const jaTreinou=st.hist.some(h=>h.u===u&&h.t===st.treinoAtivo&&new Date(h.d).toDateString()===hoje);
  const semTreinos=st.hist.filter(h=>h.u===u&&dentroSemana(h.d));
  const total=st.hist.filter(h=>h.u===u).length;
  let html='';
  html+='<div class="stats-grid"><div class="stat-box"><div class="stat-lbl">Total de treinos</div><div class="stat-val neon">'+total+'</div><div class="stat-sub">desde o início</div></div>';
  html+='<div class="stat-box"><div class="stat-lbl">Esta semana</div><div class="stat-val">'+semTreinos.length+'<span style="font-size:16px;color:var(--txt3)">/4</span></div><div class="stat-sub">dias treinados</div></div></div>';
  html+='<div class="week-row">';
  const dias=['D','S','T','Q','Q','S','S'];
  for(let i=0;i<7;i++){
    const d=new Date();d.setDate(d.getDate()-d.getDay()+i);
    const ds=d.toDateString();const hoje2=new Date().toDateString();
    const tF=st.hist.find(h=>h.u===u&&new Date(h.d).toDateString()===ds);
    const cls=tF?(tF.t==='A'||tF.t==='UA'?'done-a':'done-b'):'';
    const hj=ds===hoje2?'today':'';
    html+='<div class="day-dot '+cls+' '+hj+'" style="font-size:8px;">'+(tF?tF.t:dias[i])+'</div>';
  }
  html+='</div>';
  html+='<div style="display:flex;gap:5px;padding:0 16px;margin-bottom:14px;overflow-x:auto;">';
  tabs.forEach(tid=>{
    const tt=prog.treinos[tid];
    const ativo=st.treinoAtivo===tid;
    html+='<button style="flex-shrink:0;padding:8px 10px;border-radius:8px;border:1px solid '+(ativo?'rgba(170,255,0,0.35)':'var(--dk3)')+';background:'+(ativo?'var(--neon3)':'var(--dk2)')+';font-size:11px;color:'+(ativo?'var(--neon)':'var(--txt2)')+';cursor:pointer;text-align:center;line-height:1.3;" onclick="mudaTreino(\''+tid+'\')">'
      +'<div style="font-weight:600;font-size:12px;">'+tt.nome+'</div><div style="opacity:0.7;font-size:10px;">'+tt.foco+'</div></button>';
  });
  html+='</div>';
  if(u==='caio')html+='<div style="margin:0 16px 12px;background:var(--neon3);border:1px solid rgba(170,255,0,0.2);border-radius:8px;padding:10px 12px;font-size:12px;color:var(--neon);"><i class="ti ti-star" aria-hidden="true" style="font-size:14px;vertical-align:-2px;margin-right:4px"></i><b>Caio:</b> Priorize técnica perfeita antes de aumentar carga. Hidratação redobrada.</div>';
  html+='<div class="section-lbl">Exercícios de hoje</div>';
  (t.ex||[]).forEach((ex,i)=>{
    const ck=st.user+'-'+st.treinoAtivo+'-'+i;
    const carga=st.cargas[ck]||'';const open=st.exp.has(i);
    html+='<div class="ex-card'+(open?' open':'')+'" id="excard-'+i+'">'
      +'<div class="ex-head" onclick="togEx('+i+')">'
      +'<div class="ex-num">'+(i+1)+'</div>'
      +'<div class="ex-info"><div class="ex-name">'+ex.n+'</div><div class="ex-muscle">'+ex.m+'</div></div>'
      +'<i class="ti ti-chevron-down ex-arrow" aria-hidden="true"></i></div>'
      +'<div class="ex-pills"><span class="pill neon">'+ex.s+'x</span><span class="pill">'+ex.r+' reps</span><span class="pill">'+ex.d+'s desc.</span></div>';
    if(open){
      html+='<div class="ex-body">'
        +'<div class="ex-row"><b>Cadência:</b> '+ex.c+'</div>'
        +'<div class="ex-row"><b>Execução:</b> '+ex.ex+'</div>'
        +'<div class="ex-alert"><i class="ti ti-alert-circle" aria-hidden="true" style="font-size:13px;vertical-align:-2px;margin-right:4px"></i><b>Erros comuns:</b> '+ex.err+'</div>';
      if(ex.dca&&u==='caio')html+='<div class="caio-tip"><i class="ti ti-star" aria-hidden="true" style="font-size:13px;vertical-align:-2px;margin-right:4px"></i>'+ex.dca+'</div>';
      html+='<div class="carga-row"><span class="carga-lbl"><i class="ti ti-weight" aria-hidden="true" style="font-size:14px;vertical-align:-2px;margin-right:4px;color:var(--neon)"></i>Carga usada</span>'
        +'<input class="carga-input" type="number" value="'+carga+'" id="carga-'+i+'" placeholder="0"><span class="carga-unit">kg</span>'
        +'<button class="carga-save" onclick="salvaCarga('+i+')">Salvar</button></div>'
        +'<div style="margin-top:10px;"><button style="width:100%;padding:10px;background:var(--dk3);border:1px solid var(--dk4);border-radius:var(--rad-sm);font-size:12px;color:var(--txt2);cursor:pointer;" onclick="setTimerEx('+ex.d+',\''+ex.n.replace(/\'/g,"\\'")+'\')"><i class="ti ti-clock" aria-hidden="true" style="font-size:14px;vertical-align:-2px;margin-right:4px"></i>Timer de descanso ('+ex.d+'s)</button></div></div>';
    }
    html+='</div>';
  });
  html+='<div style="height:8px;"></div>';
  html+='<button class="reg-btn" '+(jaTreinou?'disabled':'')+' onclick="registrar()"><i class="ti ti-check" aria-hidden="true"></i> '+(jaTreinou?'Treino registrado hoje!':'Registrar treino de hoje')+'</button>';
  el.innerHTML=html;
}

function togEx(i){if(st.exp.has(i))st.exp.delete(i);else{st.exp.clear();st.exp.add(i);}renderTreino();}
function mudaTreino(t){st.treinoAtivo=t;st.exp.clear();renderTreino();}

function salvaCarga(i){
  const v=document.getElementById('carga-'+i);if(!v)return;
  const ck=st.user+'-'+st.treinoAtivo+'-'+i;st.cargas[ck]=v.value;save();toast('Carga salva: '+v.value+'kg');
}

function registrar(){
  const u=st.user,t=st.treinoAtivo;const hoje=new Date().toDateString();
  if(st.hist.some(h=>h.u===u&&h.t===t&&new Date(h.d).toDateString()===hoje)){toast('Já registrado hoje!');return;}
  st.hist.push({u,t,d:new Date().toISOString()});save();
  const nm={stevan:'Stevan',amanda:'Amanda',caio:'Caio'};
  toast('Treino '+t+' registrado — '+nm[u]+'! 💪');
  document.getElementById('streak-val').textContent=calcSemanas(u);
  renderAll();
}

function dentroSemana(d){const ini=new Date();ini.setDate(ini.getDate()-ini.getDay());ini.setHours(0,0,0,0);return new Date(d)>=ini;}
function calcSemanas(u){
  const tr=st.hist.filter(h=>h.u===u);if(!tr.length)return 0;
  return new Set(tr.map(h=>{const d=new Date(h.d);return d.getFullYear()+'-'+Math.floor((d-new Date(d.getFullYear(),0,1))/(7*24*3600*1000));})).size;
}

function renderHist(){
  const u=st.user;
  document.getElementById('hist-label').textContent=u?'Histórico de '+(u.charAt(0).toUpperCase()+u.slice(1)):'Histórico geral';
  const lista=[...st.hist].filter(h=>!u||h.u===u).sort((a,b)=>new Date(b.d)-new Date(a.d)).slice(0,30);
  const el=document.getElementById('hist-body');
  if(!lista.length){el.innerHTML='<div class="empty"><i class="ti ti-calendar-off" aria-hidden="true"></i>Nenhum treino registrado</div>';return;}
  const nm={stevan:'Stevan',amanda:'Amanda',caio:'Caio'};
  el.innerHTML=lista.map(h=>{
    const d=new Date(h.d).toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'});
    const prog=PROGRAMAS.find(p=>p.treinos&&p.treinos[h.t]);
    const foco=prog&&prog.treinos[h.t]?prog.treinos[h.t].foco:'';
    const isSup=h.t==='A'||h.t==='UA'||h.t==='UB';
    return '<div class="hist-item"><div class="hist-ico '+(isSup?'a':'b')+'"><i class="ti '+(isSup?'ti-dumbbell':'ti-run')+'" aria-hidden="true"></i></div>'
      +'<div class="hist-info"><div class="hist-title">'+(prog?prog.nome+' · ':'')+h.t+(u?'':' — '+nm[h.u])+(foco?' · '+foco:'')+'</div>'
      +'<div class="hist-sub">'+d+'</div></div><span class="hist-tag">'+h.t+'</span></div>';
  }).join('');
}

function renderProg(){
  const u=st.user;const el=document.getElementById('prog-body');
  if(!u){el.innerHTML='<div class="empty"><i class="ti ti-chart-bar" aria-hidden="true"></i>Selecione um usuário</div>';return;}
  const tr=st.hist.filter(h=>h.u===u);
  const total=tr.length;const semTr=tr.filter(h=>dentroSemana(h.d)).length;
  const pct=Math.min(100,Math.round((semTr/4)*100));const semanas=calcSemanas(u);
  const prog=getProg();const tabs=getTabs();
  let html='<div class="stats-grid"><div class="stat-box"><div class="stat-lbl">Semanas ativas</div><div class="stat-val neon">'+semanas+'</div></div>';
  html+='<div class="stat-box"><div class="stat-lbl">Total de treinos</div><div class="stat-val">'+total+'</div></div>';
  tabs.forEach(tid=>{const cnt=tr.filter(h=>h.t===tid).length;html+='<div class="stat-box"><div class="stat-lbl">'+prog.treinos[tid].nome+'</div><div class="stat-val">'+cnt+'</div><div class="stat-sub">'+prog.treinos[tid].foco+'</div></div>';});
  html+='</div>';
  html+='<div class="prog-card"><div class="prog-title">Meta semanal</div><div class="prog-label"><span>'+semTr+' treinos essa semana</span><span>'+pct+'%</span></div><div class="prog-bar-bg"><div class="prog-bar-fill" style="width:'+pct+'%"></div></div></div>';
  html+='<div style="padding:0 16px;"><div style="background:var(--neon3);border:1px solid rgba(170,255,0,0.2);border-radius:var(--rad-sm);padding:10px 12px;font-size:12px;color:var(--neon);line-height:1.6;"><i class="ti ti-arrow-up-right" aria-hidden="true" style="font-size:14px;vertical-align:-2px;margin-right:4px"></i><b>Progressão:</b> Quando completar todas as séries no limite superior por 2 semanas com boa técnica, aumente +1kg (isolamento) ou +2,5kg (composto).</div></div>';
  html+='<div style="padding:0 16px;margin-top:12px;"><div class="section-lbl" style="padding:0;margin-bottom:10px;">Cargas registradas</div>';
  tabs.forEach(tid=>{
    const tt=prog.treinos[tid];let temCarga=false;
    let bloco='<div style="background:var(--dk2);border:1px solid var(--dk3);border-radius:var(--rad);padding:12px;margin-bottom:8px;"><div style="font-size:12px;font-weight:600;color:var(--neon);margin-bottom:8px;">'+tt.nome+' — '+tt.foco+'</div>';
    (tt.ex||[]).forEach((ex,i)=>{const ck=u+'-'+tid+'-'+i;const carga=st.cargas[ck];if(!carga)return;temCarga=true;bloco+='<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--dk3);font-size:12px;"><span style="color:var(--txt2);">'+ex.n+'</span><span style="color:var(--txt);font-weight:600;">'+carga+' kg</span></div>';});
    bloco+='</div>';if(temCarga)html+=bloco;
  });
  html+='</div>';el.innerHTML=html;
}

function renderConfig(){
  document.getElementById('programas-list').innerHTML=PROGRAMAS.map(p=>
    '<div class="programa-card'+(st.progAtivo===p.id?' active-prog':'')+'" onclick="trocarProg(\''+p.id+'\')">'
    +'<div class="prog-name">'+p.nome+(st.progAtivo===p.id?' <span style="font-size:11px;color:var(--neon)">✓ ativo</span>':'')+'</div>'
    +'<div class="prog-desc">'+p.descricao+'</div></div>'
  ).join('');
}

function trocarProg(id){
  st.progAtivo=id;const tabs=Object.keys(getProg().treinos);st.treinoAtivo=tabs[0];st.exp.clear();
  save();toast('Programa alterado!');renderAll();
}

function setTimerEx(seg,nome){setTimer(seg,nome);mudarPag('timer');}
function setTimer(s,nome){st.timer.seg=s;st.timer.total=s;if(nome)document.getElementById('timer-ex-name').textContent=nome;timerReset();renderTimer();}
function timerAjuste(d){st.timer.seg=Math.max(5,st.timer.seg+d);st.timer.total=Math.max(st.timer.total,st.timer.seg);renderTimer();}

function timerToggle(){
  if(st.timer.rodando){clearInterval(st.timer.iv);st.timer.rodando=false;document.getElementById('btn-timer-play').innerHTML='<i class="ti ti-player-play" aria-hidden="true"></i> Iniciar';}
  else{st.timer.rodando=true;document.getElementById('btn-timer-play').innerHTML='<i class="ti ti-player-pause" aria-hidden="true"></i> Pausar';
    st.timer.iv=setInterval(()=>{st.timer.seg--;renderTimer();if(st.timer.seg<=0){clearInterval(st.timer.iv);st.timer.rodando=false;document.getElementById('btn-timer-play').innerHTML='<i class="ti ti-player-play" aria-hidden="true"></i> Iniciar';toast('Descanso finalizado! 💪');if(navigator.vibrate)navigator.vibrate([200,100,200]);}},1000);}
}

function timerReset(){if(st.timer.iv)clearInterval(st.timer.iv);st.timer.rodando=false;const btn=document.getElementById('btn-timer-play');if(btn)btn.innerHTML='<i class="ti ti-player-play" aria-hidden="true"></i> Iniciar';renderTimer();}

function renderTimer(){
  const s=st.timer.seg,tot=st.timer.total||90;
  const m=Math.floor(Math.max(0,s)/60),ss=Math.max(0,s)%60;
  const el=document.getElementById('timer-big');if(el)el.textContent=m+':'+(ss<10?'0':'')+ss;
  const arc=document.getElementById('arc-circle');if(arc){const circ=326.7;arc.style.strokeDashoffset=circ*(1-Math.max(0,s)/tot);}
}

function toast(msg){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2400);}

let deferredPrompt=null;
window.addEventListener('beforeinstallprompt',(e)=>{e.preventDefault();deferredPrompt=e;document.getElementById('install-banner').classList.add('show');});
function instalarApp(){if(!deferredPrompt)return;deferredPrompt.prompt();deferredPrompt.userChoice.then(()=>{document.getElementById('install-banner').classList.remove('show');deferredPrompt=null;});}
window.addEventListener('appinstalled',()=>{document.getElementById('install-banner').classList.remove('show');});
if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').catch(()=>{});});}

document.addEventListener('touchstart',function(e){if(e.touches.length>1)e.preventDefault();},{passive:false});
let ultimoToque=0;
document.addEventListener('touchend',function(e){const agora=Date.now();if(agora-ultimoToque<=300)e.preventDefault();ultimoToque=agora;},{passive:false});
document.addEventListener('gesturestart',function(e){e.preventDefault();},{passive:false});
document.addEventListener('gesturechange',function(e){e.preventDefault();},{passive:false});

load();
renderTimer();
