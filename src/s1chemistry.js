// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';

const s1chemistry = [
    {
        question: "NO₃⁻ 溶解性",
        answer: "都可溶"
    },
    {
        question: "CH3COO⁻ 溶解性",
        answer: "Ag⁺不溶"
    },
    {
        question: "卤素离子溶解性",
        answer: "Ag⁺ Pb²⁺ Hg₂²⁺ Cu⁺不溶"
    },
    {
        question: "OH⁻ 溶解性",
        answer: "只溶 H⁺ NH₄⁺ IA族 Ca⁺ Sr²⁺ Ba²⁺"
    },
    {
        question: "S²⁻ 溶解性",
        answer: "只溶H⁺ NH₄⁺ IA族 IIA族 "
    },
    {
        question: "PO₄³⁻ 溶解性",
        answer: "只溶 H⁺ NH₄⁺ IA族"
    },
    {
        question: "CO₃²⁻ 溶解性",
        answer: "只溶 H⁺ NH₄⁺ IA族"
    },
    {
        question: "SO₃²⁻ 溶解性",
        answer: "只溶 H⁺ NH₄⁺ IA族"
    },
    {
        question: "SO₄²⁻ 溶解性",
        answer: "IIA族、Pb²⁺不溶（Ca²⁺沉淀不明显）"
    },
    {
        question: "CrO₄²⁻溶解性",
        answer: "Ca Sr Ba 重金属 不溶"
    },
    {
        question: "两性氢氧化物（4个）",
        answer: "铝、锌、锡、铅 @ 溶于强酸形成金属离子和水，溶于强碱形成金属酸根（AlO₂⁻)和水"
    },
    {
        question: "少量氨水沉淀 但沉淀溶于过量氨水的阳离子（3个）",
        answer: "Cu²⁺ 、Zn²⁺ 、Ag⁺ @ 分别生成 Cu(NH₃)₄²⁺ 、 Zn(NH₃)₄²⁺ 、Ag(NH₃)₂⁺"
    },
    {
        question: "鉴定 Mg²⁺ Al²⁺ Zn²⁺",
        answer: "都可和少量NaOH生产白色沉淀（两性氢氧化物难溶于水，但溶于强酸强碱）@ Mg²⁺ ：碱性氢氧化物，不溶于过量NaOH和氨水 @ Al³⁺ ：溶于过量NaOH（形成AlO²⁻和水），但不溶于氨水 @ Zn²⁺ ：溶于过量NaOH和过量氨水（形成透明的[Zn(NH₃)₄]²⁺）"
    },
    {
        question: "鉴定Fe²⁺ Fe³⁺",
        answer: "1. NaOH: Fe²⁺产生白色沉淀Fe(OH)₂迅速变成灰绿色沉淀，且很快被氧化成Fe(OH)₃；Fe³⁺产生红褐色沉淀Fe(OH)₃ @ 2. Fe²⁺和黄色K₃Fe(CN)₆产生深蓝色Fe₃(Fe(CN)₆)₂；@Fe³⁺和黄色K₄Fe(CN)₆产生深蓝色Fe₄(Fe(CN)₆)₃ @ 3. H₂S: Fe²⁺产生黑色沉淀FeS；Fe³⁺产生黄色沉淀S @ 4. 无色KSCN：Fe²⁺无反应，Fe³⁺产生血红色离子[FeSCN]²⁺"
    },
    {
        question: "鉴定Cu²⁺",
        answer: "1. 加氨水生成蓝色沉淀Cu(OH)₂，此沉淀溶于过量氨水 @ 2. 加NaOH生成蓝色沉淀Cu(OH)₂，加热沉淀变成黑色CuO"
    },
    {
        question: "鉴定Ag⁺",
        answer: "1. 加NaOH生成白色AgOH沉淀，迅速分解成棕色Ag₂O沉淀和水，此沉淀溶于过量氨水 @ 2. 加Cl⁻ 生成AgCl沉淀，此沉淀不溶于稀硝酸但溶于氨水"
    },
    {
        question: "鉴定Pb²⁺",
        answer: "通入H₂S形成黑色PbS沉淀"
    },
    {
        question: "鉴定Ba²⁺ ",
        answer: "加入稀硫酸/硫酸盐，生成白色BaSO₄沉淀 "
    },
    {
        question: "鉴定NH₄⁺",
        answer: "加入NaOH，放出刺激性气味的碱性气体（石蕊试纸）（NH₃+H₂O)"
    },
    {
        question: "鉴定SO₄²⁺",
        answer: "加入BaCl₂，生成白色BaSO₄沉淀，此沉淀不溶于HCl"
    },
    {
        question: "鉴定SO₃²⁻",
        answer: "1. 加入稀硫酸或稀盐酸（H⁺），生成无色刺激性气体（SO₂）@ 2. 加入BaCl₂，生成白色BaSO₃沉淀，此沉淀溶于稀盐酸（BaSO₄不溶）并生成无色刺激性气体"
    },
    {
        question: "鉴定CO₃²⁻",
        answer: "1. 加入硝酸或者盐酸，生成无色气体，此气体使石灰水变浑浊 @ 2. 加入Ba(OH)₂生成白色BaCO₃沉淀，此沉淀溶于酸并放出无色气体"
    },
    {
        question: "鉴定NO₃⁻",
        answer: "1. 加Cu和浓硫酸，生成红棕色刺激性气体 @ Cu + 2NO₃⁻+ 4H⁺ → Cu²⁺ +NO₂ +2H₂O @ 2. 棕色环法 @ NO₃⁻ + H₂SO₄ → HSO₄⁻ + HNO₃ @ 2HNO₃ + 6FeSO₄ + 3H₂SO₄ → 3Fe₂(SO4)₃  + 4H₂O + 2NO @ FeSO₄ + NO → FeSO₄.NO （棕色沉淀，不稳定）"
    },
    {
        question: "鉴定PO₄³⁻",
        answer: "加入AgNO₃或者Ba(NO₃)₂，生成Ag₃PO₄或者Ba₃(PO₄)₂,此沉淀溶于稀硝酸生成金属离子和H₂PO₄⁻ "
    },
    {
        question: "鉴定Ca²⁺",
        answer: "与草酸铵(NH₄)₂C₂O₄生成草酸钙（Sr²⁺，Ba²⁺有类似反应），再加入硫酸钠，不生沉淀（Sr²⁺，Ba²⁺有明显沉淀）"
    },
    {
        question: "检验O₃",
        answer: "2KI + H₂SO₄ + O₃ → I₂（可使淀粉变蓝色） + O₂ + K₂SO₄ + H₂O"
    },
    {
        question: "检验H₂S",
        answer: "1. KMnO₄（紫色） + 5H₂S + 3H₂SO₄ → K₂SO₄ + 2MnSO₄ + 8H₂O + 5S（黄色）@ 2. H₂S + Pb(CH₃COO)₂（无色）→ PbS（黑色） + 2CH₃COOH"
    },
    {
        question: "检验SO₂",
        answer: "1. 3SO₂ + K₂Cr₂O7（橙色） + H₂SO₄ → K₂SO₄ + Cr₂(SO₄)₃（绿色） + H₂O @ 2. 5SO₂ + 2KMnO₄（紫色） + 2H₂O → K₂SO₄ + 2MnSO₄（无色）+ 2H₂SO₄"
    },
    {
        question: "制取氯气（Cl₂）",
        answer: "1. 4HCl + MnO₂ -△→ MnCl₂ + 2H₂O + Cl₂ @ 2. 16HCl + 2KMnO₄ → 2KCl + 2MnCl₂ + 8H₂O+ 5Cl₂ @ 尾气处理： @ 2NaOH + Cl₂ → NaCl + NaClO + H₂O @ 2H₂O + Cl₂ → HCl + HClO @ @ 氯碱工业：2NaCl + 2H₂O → [Cl₂](阳极) + [H₂ + 2NaOH]（阴极）"
    },
    {
        question: "制取氯化氢（HCl）",
        answer: "NaCl + H₂SO₄ → NaHSO₄ + HCl @ NaCl + NaHSO₄ → Na2SO₄ + HCl @  @ 工业：H₂ + Cl₂ -△→ 2HCl @ *Cl₂通过合成塔时会有杂质FeCl₃产生"
    },
    {
        question: "制取二氧化碳（CO₂）",
        answer: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂（向上排空气法） @  @ 工业： CaCO₃ -△-> CaO + CO₂"
    },
    {
        question: "制取碳酸钠（Na2CO₃）（纯碱，苏打）",
        answer: "苏尔未法（氨碱法） @ CaCO₃ -△-> CaO + CO₂  @ NH₃ + CO₂ + H₂O → NH₄HCO₃ @ NH₄HCO₃ + NaCl → NaHCO₃ + NH₄Cl @ 2NaHCO₃ -(160°C)-> Na2CO₃ + CO₂+ H₂O @  @ 回收 @ CaO + H₂O → Ca(OH)₂ @ 2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2NH₃ + 2H₂O @ "
    },
    {
        question: "制取氮气（N₂）",
        answer: "1. NaNO₂ + NH₄Cl -△-> NaCl + N₂ + 2H₂O @ 2. 3CuO（白热） + 2NH₃ → 3Cu + 3H₂O + N₂"
    },
    {
        question: "制取一氧化氮（NO）",
        answer: "3Cu + 8HNO₃（稀） → 3Cu(NO₃)₂ + 2NO + 4H₂O"
    },
    {
        question: "制取二氧化氮（NO₂）",
        answer: "1. Cu + 4HNO₃（浓） → Cu(NO₃)₂ + 2NO₂ + 2H₂O @ 2. 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂ "
    },
    {
        question: "制取硝酸（HNO₃）",
        answer: "NaNO₃ + H₂SO₄ -△-> NaHSO₄ + HNO₃  @  @ 工业（氨的催化氧化法） @ 4NH₃ + 5O₂ -(Pt-Rh催化剂,180°C)-> 4NO + 6H₂O @ 2NO + O₂ → 2NO₂ @ 2NO₂ + H₂O → HNO₃ + HNO₂ @ 3HNO₂ → HNO₃ + 2NO + H₂O @ 尾气处理： @ NO + NO₂ + 2NaOH → 2NaNO₂ + H₂O"
    },
    {
        question: "制取氨气（NH₃）",
        answer: "2NH₄Cl + Ca(OH)₂ -△-> CaCl₂ + 2H₂O + 2NH₃ （干燥剂：CaO） @  @ 工业（哈柏法） @ N₂ + 3H₂ → 2NH₃  @ 条件：500°C, 3x10⁷Pa, Fe粉"
    },
    {
        question: "制取磷酸（H₃PO₄）",
        answer: "P₂O₅ + 3H₂O（热水） → H₃PO₄ @ *冷水产生偏磷酸（HPO₃） @  @ 工业 @ Ca₃(PO₄)₂ + 3H₂SO₄ → 3CaSO₄（沉淀，需过滤掉） + 2H₃PO₄"
    },
    {
        question: "制取过氧化氢（H₂O₂）",
        answer: "BaO₂ + H₂SO₄ → BaSO₄ + H₂O₂  @  @ 工业 @ 电解硫酸产生二硫酸 @ H₂S₂O8 + 2H₂O → 2H₂SO₄ + H₂O₂"
    },
    {
        question: "制取硫（S）",
        answer: "弗拉西法 @ 大套管：注入热水（170°C）使硫熔化 @ 小套管：注入热空气 @ 中套管：流出熔融硫、空气、水"
    },
    {
        question: "制取硫化氢（H₂S）",
        answer: "1. FeS + 2HCl → FeCl₂ + H₂S @ 2. FeS + H₂SO₄ → FeSO₄ + H₂S @ 可使用启普发生器 @ 干燥剂：无水氯化钙（再使用向上排空气法收集） @ 不可使用硫酸作为干燥剂（会反应生成硫和水）"
    },
    {
        question: "制取硫酸（H₂SO₄）",
        answer: "接触法 @  4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂（需净化） @ 2SO₂ + O₂ <-(V₂O₅,500°C,可逆)-> 2SO₃ @ SO₃ + H₂SO₄ → H₂SO₄.SO₃ （发烟硫酸） @ H₂SO₄.SO₃ + H₂O → 2H₂SO₄ "
    },
    {
        question: "炼铁",
        answer: "反应：（需要热空气） @ C + O₂ → CO₂ @ CO₂ + C → 2CO @ 3CO + Fe₂O₃ → 2Fe（生铁） + 3CO₂ @  @ 助熔剂 CaCO₃ → CaO + CO₂ @ 熔化脉石 CaO + SiO₂ → CaSiO₃（炉渣）"
    },
    {
        question: "炼钢",
        answer: "氧气顶吹转炉炼钢法（高温） @ 2Fe + O₂ → 2FeO @ FeO + Si/Mn/C → Fe + SiO₂/MnO/CO @ 回收棕色气体（CO-燃料，Fe₂O₃-炼钢）"
    },
    {
        question: "炼铜",
        answer: "2CuFeS₂+ O₂ -(焙烧)-> Cu₂S +2FeS +SO₂ @ 2Cu₂S + 3O₂ -(高温)-> 2Cu₂O + 2SO₂ @ 2Cu₂O + Cu2S -(高温)-> 6Cu + 2SO₂"
    },
    {
        question: "Ti³⁺颜色",
        answer: "紫红色"
    },
    {
        question: "V²⁺,V³⁺颜色",
        answer: "紫色，绿色"
    },
    {
        question: "Cr³⁺颜色",
        answer: "蓝紫色"
    },
    {
        question: "Mn²⁺颜色",
        answer: "粉红色"
    },
    {
        question: "Fe²⁺，Fe³⁺颜色",
        answer: "浅绿色，棕黄色"
    },
    {
        question: "Co²⁺颜色",
        answer: "粉红色"
    },
    {
        question: "Ni²⁺颜色",
        answer: "绿色"
    },
    {
        question: "Cu²⁺颜色",
        answer: "蓝色"
    },
    {
        question: "Zn²⁺颜色",
        answer: "无色"
    }
]

for(let i = 0; i < s1chemistry.length; i++){
    s1chemistry[i]['id'] = i;
    s1chemistry[i]['hardCount'] = 0;
}

export default s1chemistry;


/*
    {
        question: "Cu²⁺ 、Zn²⁺ 、Ag⁺ ¹²³⁴⁵⁶⁷⁸⁹⁰  ₀₁₂₃₄₅₆₇₈₉",
        answer: "1²3₄56  ²⁻"
    },

    */