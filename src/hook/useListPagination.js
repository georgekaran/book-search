import { useState, useEffect } from 'react';

import { useStateValue } from '../context/Context';
import { updatePageProps } from '../action/appAction';

const useListPagination = () => {
  const elementsPerPage = 10;
  const [list, setList] = useState([]);
  const [listPage, setListPage] = useState([]);
  const [{ listOriginal, search, yearIni, yearEnd, page }, contextDispatch] = useStateValue();

  const hasBookSearch = (book, search) => {
    return book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search) || book.isbn.includes(search)
  }

  const hasBookYear = (book, yearIni, yearEnd) => {
    let hasYear = true;
    if (yearIni)
      hasYear = hasYear && (book.year >= Number(yearIni))
    if (yearEnd)
      hasYear = hasYear && (book.year <= Number(yearEnd)) 
    return hasYear
  }

  useEffect(() => {
    if (list.length === 0) {
      setListPage([])
      return;
    }
      
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
      const listHasYears = listHasSearch.filter(book => hasBookYear(book, yearIni, yearEnd))
      const initialPage = 1;
      const totalPages = Math.ceil(listHasYears.length  / 10);

      setList(listHasYears);
      contextDispatch(updatePageProps(initialPage, totalPages))
    }
  }, [listOriginal, search, yearIni, yearEnd, contextDispatch])
  
  return [listPage, list]
}

export default useListPagination
