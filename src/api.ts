import fetch from 'node-fetch';
import { ResourceType } from './@types';
import { API_URL } from './config';


const resourceTypeToApiMapping: Record<ResourceType, string> = {
    [ResourceType.ADDRESS]: 'address/random_address',
    [ResourceType.PRODUCT]: 'commerce/random_commerce',
    [ResourceType.COMPANY]: 'company/random_company',
    [ResourceType.COLOR]: 'color/random_color',
    [ResourceType.DESSERT]: 'dessert/random_dessert',
    [ResourceType.USER]: 'users/random_user',
    [ResourceType.LOREM_IPSUM]: 'lorem_ipsum/random_lorem_ipsum',
    [ResourceType.LOREM_IMAGE]: 'lorem_flickr/random_lorem_flickr',
}

export const generateData = async (type: ResourceType, size = 1) => {
    const result = await fetch(`${API_URL}/${resourceTypeToApiMapping[type]}?size=${size}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        
    });
    const json = await result.json();
    return JSON.stringify(json);
}

