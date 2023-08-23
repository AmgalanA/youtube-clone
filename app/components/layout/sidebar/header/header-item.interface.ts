import { IMenuItem } from '../menu/menu-item.interface'

export interface IHeaderItem extends Pick<IMenuItem, 'to' | 'title'> {}
