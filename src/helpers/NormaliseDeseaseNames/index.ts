export const normalizeDiseaseName = (name:string) => {
    console.log({name});
    switch (name.toLowerCase().replace(/_/g, '').replace(/\s/g, '').replace(/-/g, '')) {
      case 'tomatobacterialspot':
        return 'TomatoBacterialSpot';
      case 'tomatoearlyblight':
        return 'TomatoEarlyBlight';
      case 'tomatohealthy':
        return 'TomatoHealthy';
      case 'tomatolateblight':
        return 'TomatoLateBlight';
      case 'tomatoleafmold':
        return 'TomatoLeafMold';
      case 'tomatoseptorialeafspot':
        return 'TomatoSeptoriaLeafSpot';
      case 'tomatospidermitestwospottedmite':
        return 'TomatoSpiderMitesTwoSpottedmite';
      case 'tomatotargetspot':
        return 'TomatoTargetSpot';
      case 'tomatotomatoyellowleafcurlvirus':
        return 'TomatotomatoYellowLeafCurlVirus';
      case 'tomatotomatotomasvirus':
        return 'TomatotomatoMosaicVirus';
      default:
        return null;
    }
  };
  