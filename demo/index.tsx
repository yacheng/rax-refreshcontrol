import {createElement, render} from 'rax';
import * as DriverDOM from 'driver-dom';
import * as DriverWeex from 'driver-weex';
import { isWeex } from 'universal-env';
import RefreshControl from '../src/index';

render(<RefreshControl refreshing={false} />, document.body, { driver: isWeex ? DriverWeex : DriverDOM });
