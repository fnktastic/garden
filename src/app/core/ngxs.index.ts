import { NgxsModuleOptions } from '@ngxs/store'
import { environment } from 'src/environments/environment'
import { GardenState } from './states/garden.state'

export const CORE_STATES = [
    GardenState
]

export const NGXS_CONFIGS: NgxsModuleOptions  = { 
    developmentMode: !environment.production 
}