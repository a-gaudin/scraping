const references = [{
  fullname: 'CAC40',
  symbol: '^FCHI',
  extension: '1rPCAC'
}];

// var selection = [{
//   fullname: 'Albioma',
//   symbol: 'ABIO.PA',
//   extension: '1rPABIO',
//   cac40: false
// }, {
//   fullname: 'Derichebourg',
//   symbol: 'DBG.PA',
//   extension: '1rPDBG',
//   cac40: false
// }];

const selection = [{
  fullname: 'Accor',
  symbol: 'AC.PA',
  extension: '1rPAC',
  cac40: false
}, {
  fullname: 'Aeroport de Paris',
  symbol: 'ADP.PA',
  extension: '1rPADP',
  cac40: false
}, {
  fullname: 'Airbus',
  symbol: 'AIR.PA',
  extension: '1rPAIR',
  cac40: true
},{
  fullname: 'Air France KLM',
  symbol: 'AF.PA',
  extension: '1rPAF',
  cac40: false
}, {
  fullname: 'Air Liquide',
  symbol: 'AI.PA',
  extension: '1rPAI',
  cac40: true
},{
  fullname: 'AKKA Technologies',
  symbol: 'AKA.PA',
  extension: '1rPAKA',
  cac40: false
}, {
  fullname: 'Albioma',
  symbol: 'ABIO.PA',
  extension: '1rPABIO',
  cac40: false
}, {
  fullname: 'ALD',
  symbol: 'ALD.PA',
  extension: '1rPALD',
  cac40: false
}, {
  fullname: 'Alstom',
  symbol: 'ALO.PA',
  extension: '1rPALO',
  cac40: true
}, {
  fullname: 'Alten',
  symbol: 'ATE.PA',
  extension: '1rPATE',
  cac40: false
}, {
  fullname: 'Amundi',
  symbol: 'AMUN.PA',
  extension: '1rPAMUN',
  cac40: false
}, {
  fullname: 'Aperam',
  symbol: 'APAM.AS',
  extension: '1rAAPAM',
  cac40: false
}, {
  fullname: 'Arcelor Mittal',
  symbol: 'MT',
  extension: '1rAMT',
  cac40: true
}, {
  fullname: 'Arkema',
  symbol: 'AKE.PA',
  extension: '1rPAKE',
  cac40: false
}, {
  fullname: 'Atos',
  symbol: 'ATO.PA',
  extension: '1rPATO',
  cac40: true
}, {
  fullname: 'AXA',
  symbol: 'CS.PA',
  extension: '1rPCS',
  cac40: true
}, {
  fullname: 'Bastide Le Confort',
  symbol: 'BLC.PA',
  extension: '1rPBLC',
  cac40: false
}, {
  fullname: 'Bénéteau',
  symbol: 'BEN.PA',
  extension: '1rPBEN',
  cac40: false
}, {
  fullname: 'BIC',
  symbol: 'BB.PA',
  extension: '1rPBB',
  cac40: false
}, {
  fullname: 'BioMérieux',
  symbol: 'BIM.PA',
  extension: '1rPBIM',
  cac40: false
}, {
  fullname: 'BNP Paribas',
  symbol: 'BNP.PA',
  extension: '1rPBNP',
  cac40: true
}, {
  fullname: 'Bolloré',
  symbol: 'BOL.PA',
  extension: '1rPBOL',
  cac40: false
}, {
  fullname: 'Bouygues',
  symbol: 'EN.PA',
  extension: '1rPEN',
  cac40: true
}, {
  fullname: 'Bureau Veritas',
  symbol: 'BVI.PA',
  extension: '1rPBVI',
  cac40: false
}, {
  fullname: 'Capgemini',
  symbol: 'CAP.PA',
  extension: '1rPCAP',
  cac40: true
}, {
  fullname: 'Carmila',
  symbol: 'CARM.PA',
  extension: '1rPCARM',
  cac40: false
}, {
  fullname: 'Carrefour',
  symbol: 'CA.PA',
  extension: '1rPCA',
  cac40: true
}, {
  fullname: 'Casino, Guichard-Perrachon',
  symbol: 'CO.PA',
  extension: '1rPCO',
  cac40: false
}, {
  fullname: 'Cellectis',
  symbol: 'ALCLS.PA',
  extension: '1rEPALCLS',
  cac40: false
}, {
  fullname: 'CGG',
  symbol: 'CGG.PA',
  extension: '1rPCGG',
  cac40: false
}, {
  fullname: 'CNP',
  symbol: 'CNP.PA',
  extension: '1rPCNP',
  cac40: true
}, {
  fullname: 'Coface',
  symbol: 'COFA.PA',
  extension: '1rPCOFA',
  cac40: false
}, {
  fullname: 'Covivio',
  symbol: 'COV.PA',
  extension: '1rPCOV',
  cac40: false
}, {
  fullname: 'Credit Agricole',
  symbol: 'ACA.PA',
  extension: '1rPACA',
  cac40: true
}, {
  fullname: 'Danone',
  symbol: 'BN.PA',
  extension: '1rPBN',
  cac40: true
}, {
  fullname: 'Dassault Aviation',
  symbol: 'AM.PA',
  extension: '1rPAM',
  cac40: false
}, {
  fullname: 'Dassault Systemes',
  symbol: 'DSY.PA',
  extension: '1rPDSY',
  cac40: true
}, {
  fullname: 'DBV Techno',
  symbol: 'DBV.PA',
  extension: '1rPDBV',
  cac40: false
}, {
  fullname: 'Derichebourg',
  symbol: 'DBG.PA',
  extension: '1rPDBG',
  cac40: false
}, {
  fullname: 'Devoteam',
  symbol: 'DVT.PA',
  extension: '1rPDVT',
  cac40: false
}, {
  fullname: 'Edenred',
  symbol: 'EDEN.PA',
  extension: '1rPEDEN',
  cac40: false
}, {
  fullname: 'EDF',
  symbol: 'EDF.PA',
  extension: '1rPEDF',
  cac40: false
}, {
  fullname: 'Eiffage',
  symbol: 'FGR.PA',
  extension: '1rPFGR',
  cac40: false
}, {
  fullname: 'Ekinops',
  symbol: 'EKI.PA',
  extension: '1rPEKI',
  cac40: false
},{
  fullname: 'Elior Group',
  symbol: 'ELIOR.PA',
  extension: '1rPELIOR',
  cac40: false
}, {
  fullname: 'Elis',
  symbol: 'ELIS.PA',
  extension: '1rPELIS',
  cac40: false
}, {
  fullname: 'Engie',
  symbol: 'ENGI.PA',
  extension: '1rPENGI',
  cac40: true
}, {
  fullname: 'Eramet',
  symbol: 'ERA.PA',
  extension: '1rPERA',
  cac40: false
}, {
  fullname: 'Essilor Luxottica',
  symbol: 'EL.PA',
  extension: '1rPEL',
  cac40: true
}, {
  fullname: 'Eurazeo',
  symbol: 'RF.PA',
  extension: '1rPRF',
  cac40: false
}, {
  fullname: 'Eurofins Scientific',
  symbol: 'ERF.PA',
  extension: '1rPERF',
  cac40: false
}, {
  fullname: 'Euronext',
  symbol: 'ENX.PA',
  extension: '1rPENX',
  cac40: false
}, {
  fullname: 'Europcar Mobility Group',
  symbol: 'EUCAR.PA',
  extension: '1rPEUCAR',
  cac40: false
}, {
  fullname: 'Eutelsat Communication',
  symbol: 'ETL.PA',
  extension: '1rPETL',
  cac40: true
}, {
  fullname: 'Faurecia',
  symbol: 'EO.PA',
  extension: '1rPEO',
  cac40: false
}, {
  fullname: 'FNAC Darty',
  symbol: 'FNAC.PA',
  extension: '1rPFNAC',
  cac40: true
}, {
  fullname: 'Fountaine Pajot',
  symbol: 'ALFPC.PA',
  extension: '1rPALFPC',
  cac40: false
}, {
  fullname: 'Gecina',
  symbol: 'GFC.PA',
  extension: '1rPGFC',
  cac40: false
}, {
  fullname: 'Genfit',
  symbol: 'GNFT.PA',
  extension: '1rPGNFT',
  cac40: false
}, {
  fullname: 'Getlink (ex Eurotunnel)',
  symbol: 'GET.PA',
  extension: '1rPGET',
  cac40: false
}, {
  fullname: 'GTT',
  symbol: 'GTT.PA',
  extension: '1rPGTT',
  cac40: false
}, {
  fullname: 'Hermes Intl',
  symbol: 'RMS.PA',
  extension: '1rPRMS',
  cac40: true
}, {
  fullname: 'Hexaom',
  symbol: 'HEXA.PA',
  extension: '1rPHEXA',
  cac40: false
}, {
  fullname: 'Icade',
  symbol: 'ICAD.PA',
  extension: '1rPICAD',
  cac40: false
}, {
  fullname: 'Iliad',
  symbol: 'ILD.PA',
  extension: '1rPILD',
  cac40: false
}, {
  fullname: 'Imerys',
  symbol: 'NK.PA',
  extension: '1rPNK',
  cac40: false
}, {
  fullname: 'Innate Pharma',
  symbol: 'IPH.PA',
  extension: '1rPIPH',
  cac40: true
}, {
  fullname: 'Interparfums',
  symbol: 'ITP.PA',
  extension: '1rPITP',
  cac40: false
}, {
  fullname: 'Ipsen',
  symbol: 'IPN.PA',
  extension: '1rPIPN',
  cac40: false
}, {
  fullname: 'Jacquet Metals',
  symbol: 'JCQPA',
  extension: '1rPJCQ',
  cac40: false
}, {
  fullname: 'JC Decaux',
  symbol: 'DEC.PA',
  extension: '1rPDEC',
  cac40: false
}, {
  fullname: 'Kaufman et Broad',
  symbol: 'KOF.PA',
  extension: '1rPKOF',
  cac40: false
}, {
  fullname: 'Kering',
  symbol: 'KER.PA',
  extension: '1rPKER',
  cac40: true
}, {
  fullname: 'Klepierre',
  symbol: 'LI.PA',
  extension: '1rPLI',
  cac40: false
}, {
  fullname: 'Korian',
  symbol: 'KORI.PA',
  extension: '1rPKORI',
  cac40: false
}, {
  fullname: 'Loreal',
  symbol: 'OR.PA',
  extension: '1rPOR',
  cac40: true
}, {
  fullname: 'Lagardere',
  symbol: 'MMB.PA',
  extension: '1rPMMB',
  cac40: false
}, {
  fullname: 'Legrand',
  symbol: 'LR.PA',
  extension: '1rPLR',
  cac40: true
}, {
  fullname: 'Lisi',
  symbol: 'FII.PA',
  extension: '1rPFII',
  cac40: false
}, {
  fullname: 'LVMH',
  symbol: 'MC.PA',
  extension: '1rPMC',
  cac40: true
}, {
  fullname: 'M6 Metropole Television',
  symbol: 'MMT.PA',
  extension: '1rPMMT',
  cac40: false
}, {
  fullname: 'Maisons du monde',
  symbol: 'MDM.PA',
  extension: '1rPMDM',
  cac40: false
}, {
  fullname: 'Manitou BF',
  symbol: 'MTU.PA',
  extension: '1rPMTU',
  cac40: false
}, {
  fullname: 'Mercialys',
  symbol: 'MERY.PA',
  extension: '1rPMERY',
  cac40: false
}, {
  fullname: 'Mersen',
  symbol: 'MRN.PA',
  extension: '1rPMRN',
  cac40: false
}, {
  fullname: 'Michelin',
  symbol: 'ML.PA',
  extension: '1rPML',
  cac40: true
}, {
  fullname: 'Natixis',
  symbol: 'KN.PA',
  extension: '1rPKN',
  cac40: false
}, {
  fullname: 'Neoen',
  symbol: 'NEOEN.PA',
  extension: '1rPNEOEN',
  cac40: false
}, {
  fullname: 'Nexans',
  symbol: 'NEX.PA',
  extension: '1rPNEX',
  cac40: false
}, {
  fullname: 'Nexity',
  symbol: 'NXI.PA',
  extension: '1rPNXI',
  cac40: false
}, {
  fullname: 'NOKIA',
  symbol: 'NOKIA.PA',
  extension: '1rPNOKIA',
  cac40: false
}, {
  fullname: 'Orange',
  symbol: 'ORA.PA',
  extension: '1rPORA',
  cac40: true
}, {
  fullname: 'Orpea',
  symbol: 'ORP.PA',
  extension: '1rPORP',
  cac40: false
}, {
  fullname: 'Pernod Ricard',
  symbol: 'RI.PA',
  extension: '1rPRI',
  cac40: true
}, {
  fullname: 'Plastic Omnium',
  symbol: 'POM.PA',
  extension: '1rPPOM',
  cac40: false
}, {
  fullname: 'Poxel',
  symbol: 'POXEL.PA',
  extension: '1rPPOXEL',
  cac40: false
}, {
  fullname: 'Publicis Grp',
  symbol: 'PUB.PA',
  extension: '1rPPUB',
  cac40: true
}, {
  fullname: 'Quadient',
  symbol: 'QDT.PA',
  extension: '1rPQDT',
  cac40: false
}, {
  fullname: 'Remy Cointreau',
  symbol: 'RCO.PA',
  extension: '1rPRCO',
  cac40: false
}, {
  fullname: 'Renault',
  symbol: 'RNO.PA',
  extension: '1rPRNO',
  cac40: true
}, {
  fullname: 'Rexel',
  symbol: 'RXL.PA',
  extension: '1rPRXL',
  cac40: false
}, {
  fullname: 'Rubis',
  symbol: 'RUI.PA',
  extension: '1rPRUI',
  cac40: false
}, {
  fullname: 'Safran',
  symbol: 'SAF.PA',
  extension: '1rPSAF',
  cac40: true
}, {
  fullname: 'Saint Gobain',
  symbol: 'SGO.PA',
  extension: '1rPSGO',
  cac40: true
}, {
  fullname: 'Sanofi',
  symbol: 'SAN.PA',
  extension: '1rPSAN',
  cac40: true
}, {
  fullname: 'Sartorius Stedim Biotech',
  symbol: 'DIM.PA',
  extension: '1rPDIM',
  cac40: false
}, {
  fullname: 'Schneider Electric',
  symbol: 'SU.PA',
  extension: '1rPSU',
  cac40: true
}, {
  fullname: 'Scor',
  symbol: 'SCR.PA',
  extension: '1rPSCR',
  cac40: false
}, {
  fullname: 'SEB',
  symbol: 'SK.PA',
  extension: '1rPSK',
  cac40: false
}, {
  fullname: 'SES',
  symbol: 'SESG.PA',
  extension: '1rPSESG',
  cac40: false
}, {
  fullname: 'SII',
  symbol: 'SII.PA',
  extension: '1rPSII',
  cac40: false
},{
  fullname: 'Societe Generale',
  symbol: 'GLE.PA',
  extension: '1rPGLE',
  cac40: true
}, {
  fullname: 'Sodexo',
  symbol: 'SW.PA',
  extension: '1rPSW',
  cac40: false
}, {
  fullname: 'Soitec',
  symbol: 'SOI.PA',
  extension: '1rPSOI',
  cac40: false
}, {
  fullname: 'Solutions 30',
  symbol: 'S30.PA',
  extension: '1rPS30',
  cac40: false
}, {
  fullname: 'Solvay',
  symbol: 'SOLB.BR',
  extension: 'FF11-SOLB',
  cac40: false
}, {
  fullname: 'Sopra Steria',
  symbol: 'SOP.PA',
  extension: '1rPSOP',
  cac40: false
}, {
  fullname: 'SPIE',
  symbol: 'SPIE.PA',
  extension: '1rPSPIE',
  cac40: false
}, {
  fullname: 'Stellantis',
  symbol: 'STLA',
  extension: '1gSTLA',
  cac40: true
}, {
  fullname: 'STMicroelectronics',
  symbol: 'STM.PA',
  extension: '1rPSTM',
  cac40: true
}, {
  fullname: 'Suez',
  symbol: 'SEV.PA',
  extension: '1rPSEV',
  cac40: false
}, {
  fullname: 'Tarkett',
  symbol: 'TKTT.PA',
  extension: '1rPTKTT',
  cac40: false
}, {
  fullname: 'Technip FMC',
  symbol: 'FTI.PA',
  extension: '1rPFTI',
  cac40: false
}, {
  fullname: 'Teleperformance',
  symbol: 'TEP.PA',
  extension: '1rPTEP',
  cac40: true
}, {
  fullname: 'TF1',
  symbol: 'TFI.PA',
  extension: '1rPTFI',
  cac40: false
}, {
  fullname: 'Thales',
  symbol: 'HO.PA',
  extension: '1rPHO',
  cac40: true
}, {
  fullname: 'Total',
  symbol: 'TTE.PA',
  extension: '1rPTTE',
  cac40: true
}, {
  fullname: 'Trigano',
  symbol: 'TRI.PA',
  extension: '1rPTRI',
  cac40: false
}, {
  fullname: 'Ubisoft Entertainment',
  symbol: 'UBI.PA',
  extension: '1rPUBI',
  cac40: false
}, {
  fullname: 'Unibail Rodamco Westfield',
  symbol: 'URW.AS',
  extension: '1rAURW',
  cac40: true
}, {
  fullname: 'Valeo',
  symbol: 'FR.PA',
  extension: '1rPFR',
  cac40: true
}, {
  fullname: 'Vallourec',
  symbol: 'VK.PA',
  extension: '1rPVK',
  cac40: false
}, {
  fullname: 'Veolia',
  symbol: 'VIE.PA',
  extension: '1rPVIE',
  cac40: true
}, {
  fullname: 'Verallia',
  symbol: 'VRLA.PA',
  extension: '1rPVRLA',
  cac40: false
}, {
  fullname: 'Vicat',
  symbol: 'VCT.PA',
  extension: '1rPVCT',
  cac40: false
}, {
  fullname: 'Vinci',
  symbol: 'DG.PA',
  extension: '1rPDG',
  cac40: true
}, {
  fullname: 'Virbac',
  symbol: 'VIRP.PA',
  extension: '1rPVIRP',
  cac40: false
}, {
  fullname: 'Vivendi',
  symbol: 'VIV.PA',
  extension: '1rPVIV',
  cac40: true
}, {
  fullname: 'Wendel',
  symbol: 'MF.PA',
  extension: '1rPMF',
  cac40: false
}, {
  fullname: 'Worldline',
  symbol: 'WLN.PA',
  extension: '1rPWLN',
  cac40: true
}, {
  fullname: '2CRSI',
  symbol: '2CRSI.PA',
  extension: '1rP2CRSI',
  cac40: false
}];

// selection = selection.filter(function(obj) {
//     return obj.cac40 === true;
//   });

// console.log(selection);

module.exports = {
  references: {
    symbols: references.map(({symbol}) => symbol),
    extensions: references.map(({extension}) => extension),
    urls: references.map(({extension}) =>
      `https://www.boursorama.com/cours/${extension}/`)
  },
  selection: {
    symbols: selection.map(({symbol}) => symbol),
    extensions: selection.map(({extension}) => extension),
    urls: selection.map(({extension}) =>
      `https://www.boursorama.com/cours/${extension}/`)
  }
};
