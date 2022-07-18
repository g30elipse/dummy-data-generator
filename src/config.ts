import { ResourceType } from "./@types";

export const API_URL = 'https://random-data-api.com/api';
export const MENU_ITEMS: {value:ResourceType, label: string}[] = [
    {
        label: 'Address',
        value: ResourceType.ADDRESS
    },
    {
        label: 'Product',
        value: ResourceType.PRODUCT
    },
    {
        label: 'Company',
        value: ResourceType.COMPANY
    },
    {
        label: 'Color',
        value: ResourceType.COLOR
    },
    {
        label: 'Dessert',
        value: ResourceType.DESSERT
    },
    {
        label: 'User',
        value: ResourceType.USER
    },
    {
        label: 'Lorem Ipsum',
        value: ResourceType.LOREM_IPSUM
    },
    {
        label: 'Lorem Image',
        value: ResourceType.LOREM_IMAGE
    }
]