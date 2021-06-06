import * as React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import css from './index.module.scss'

import Dialog from '../components/Dialog'

const Home: React.FC = () => {
  return (
    <div className={css.container}>
      <Dialog></Dialog>
    </div>
  )
}

export default Home;