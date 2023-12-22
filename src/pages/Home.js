import React, { useState, useEffect } from 'react'
import Tables from '../components/Tables'
import Header from '../components/Header'
import { useGetContactQuery } from '../store/contact'


export const Home = () => {
  const [search, setSearch] = useState('')
  const [isReload, setIsReload] = useState(false)
  const { data, isLoading, refetch } = useGetContactQuery(search)
  useEffect(() => {
        refetch()
        setIsReload(false)
  }, [search, isReload])
  return (
    <>
        <Header search={search} setSearch={setSearch} isRefetch={setIsReload} />
        <Tables tableData={data} isLoading={isLoading} isRefetch={setIsReload} />
    </>
  )
}
