import React from 'react'
import TopbarCateg from '@/components/TopbarCateg';
import Producto from '@/components/Producto';
import ProductoG from '@/components/ProductoG';
import Categoria from '@/components/Categoria';
import ProductoCard from '@/components/ProductoCard';

function main() {
  return (
    <React.Fragment>
        <TopbarCateg titulo={"Todos"} />
        <Categoria />
    </React.Fragment>
  )
}

export default main