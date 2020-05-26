import { useState, useEffect } from 'react';
const {
  config: { apiUrl },
} = require('../../config');

export function useCrud(url, load = true) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(apiUrl + url, {
          cache: 'default',
        });

        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    load && fetchData();
  }, [load, url]);

  async function save(data, id) {
    try {
      const headers = { 'Content-Type': 'application/json' };
      const body = JSON.stringify(data);
      const resp = await fetch(apiUrl + url + (id ? '/' + id : ''), {
        method: id ? 'PUT' : 'POST',
        headers,
        body,
      });

      const newDocument = await resp.json();

      console.log(newDocument);

      // if (id) {
      //   //update
      //   const updateData = data.map((o) => {
      //     if (o.id === id) {
      //       return newDocument;
      //     }
      //     return o;
      //   });
      //   setData(updateData);
      // } else {
      //   //Insert
      //   setData((data) => [...data, newDocument]);
      // }

      // setSaving(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setSaving(false);
    }
  }

  async function get(id) {
    if (!id) return;
    try {
      setLoading(true);
      setError(false);
      const resp = await fetch(apiUrl + url + '/' + id);
      const obj = await resp.json();
      setLoading(false);
      return obj;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  async function remove(id) {
    if (!id) return;
    try {
      setLoading(true);
      setError(false);
      const resp = await fetch(apiUrl + url + '/' + id, {
        method: 'DELETE',
      });
      const obj = await resp.json();
      setLoading(false);
      setData(data.filter((o) => o.id !== id));
      setLoading(false);
      return obj;
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return {
    data,
    setData,
    save,
    get,
    saving,
    remove,
    loading,
    error,
  };
}
