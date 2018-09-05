import axios, {AxiosPromise} from 'axios';

const kUrl = "http://localhost"

export function getPartnerList(): AxiosPromise<any>
{
    return axios.get(`${kUrl}/api/partner/`);
}

export function getSponsorList(): AxiosPromise<any>
{
    return axios.get(`${kUrl}/api/sponsor/`);
}
