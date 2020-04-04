import { useState, useEffect } from 'react';
import { useStateValue } from '../context/Context';

const useListPagination = () => {
  const elementsPerPage = 10;
  const [list, setList] = useState([]);
  const [listPage, setListPage] = useState([]);
  const [{ listOriginal, search, yearIni, yearEnd, page }, contextDispatch] = useStateValue();

  const hasBookSearch = (book, search) => {
    return book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search) || book.isbn.includes(search)
  }

  const hasBookDate = (book, yearIni, yearEnd) => {
    let hasDate = true;
    if (yearIni)
      hasDate = hasDate && (book.year >= Number(yearIni))
    if (yearEnd)
      hasDate = hasDate && (book.year <= Number(yearEnd)) 
    return hasDate
  }

  useEffect(() => {
    if (list.length > 0) {
      const initialElements = elementsPerPage * (page - 1);
      const finalElements = (elementsPerPage * page);
      setListPage(list.slice(initialElements, finalElements))
    }
  }, [list, page, setListPage])

  useEffect(() => {
    if (listOriginal.length > 0) {
      const searchLowerCase = search.toLowerCase();

      const listHasSearch = listOriginal.filter(book => hasBookSearch(book, searchLowerCase));
      const listHasYears = listHasSearch.filter(book => hasBookDate(book, yearIni, yearEnd))
      const pageProps = { page: 1, totalPages: Math.ceil(listHasYears.length  / 10)}

      setList(listHasYears);
      contextDispatch({
        type: 'UPDATE_PAGE_PROPS',
        pageProps
      })
    }
  }, [listOriginal, search, yearIni, yearEnd, contextDispatch])
  
  return [listPage, list]
}

export default useListPagination
