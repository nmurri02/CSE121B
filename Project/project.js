const riotKey = 'RGAPI-1cee9e01-b9d0-4b1b-81b2-f2b0a8f10d49';
const sp = '%20';
const fetch = require("node-fetch");

getMatchList(fetchSumByName('FriedRiceBoy965' , 'accountID'));

async function getMatchList(accID, champID, queue, timeEnd, timeBegin, indexEnd, indexBegin) {
    //building link
    let link = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + awat accId +'?';
    if(champID != null)
        link+= 'champion-'+champID+'&';
    if(queue != null)
        link+= 'queue-'+queue+'&';
    if(timeEnd != null)
        link+= 'timeEnd-'+timeEnd+'&';
    if(timeBegin != null)
        link+= 'timeBegin-'+timeBegin+'&';
    if(indexEnd != null)
        link+= 'indexEnd-'+indexEnd+'&';
    if(indexBegin !=null)
        link+= 'indexBegin-'+indexBegin+'&';
    link += riotKey;
    //using the link grab information
    let response = await fetch(link);
    response = await response.json();
    console.log(response.matches[0].champion);



}


async function fetchSumByName(name,abc){
    //turn the name into link format
    while(name.includes(" ")){
        let space = name.indexOf(" ");
        name = name.substring(0,space) + sp +name.substring(space+1);
    }
    //request the riot api
    const link = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?${riotKey}`
    const response = await fetch(link);
    //turn the value returned to json
    let data = await response.json();

    if(abc == 'id'){
        console.log('wrong one reached')
        return data.id;
    }else if(abc == 'accountId'){
        return data.accountID;

    }else if(abc == 'puuuid'){
        return data.puuuid;

    }else if(abc == 'name'){
        return data.name;

    }else if(abc == 'profileIconId'){
        return data.profileIconId;

    }else if(abc == 'revisionData'){
        return data.revisionData;

    }else if(abc == 'summonerLevel'){
        return data.summonerLevel;

    }else{
        console.log('abc is not valid');
        return null;
    }
}