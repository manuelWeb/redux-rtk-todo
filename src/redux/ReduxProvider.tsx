"use client"
import { Provider } from 'react-redux';
import store from '@/redux/Store';
import { ReactNode } from 'react';

type TChildren = {
  children: ReactNode
}

export default function ReduxProvider({ children }: TChildren) {
  return <Provider store={store}>{children}</Provider>
}