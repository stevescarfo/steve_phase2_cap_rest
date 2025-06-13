// const baseURL = "http://localhost:4000/customers";

const baseURL = "https://api.jsonbin.io/v3/qs/684c45518a456b7966ad8d0c";

export async function getAll(setCustomers) {
  const myInit = {
    method: "GET",
    mode: "cors",
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, myInit);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
        setCustomers(data.record);
      // setCustomers(data);
    } catch (error) {
      alert(error);
    }
  };
  fetchData(baseURL);
}

export async function get(id, setCustomer) {
  const myInit = {
    method: "GET",
    mode: "cors",
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, myInit);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
      setCustomer(data);
      //   setCustomer(data.record);
    } catch (error) {
      alert(error);
    }
  };
  fetchData(`${baseURL}/${id}`);
}

export async function deleteById(id, callback) {
  const myInit = {
    method: "DELETE",
    mode: "cors",
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, myInit);
      if (!response.ok) {
        throw new Error(`Error deleting data: ${response.status}`);
      }
      // You might want to return the deleted item or just a success message
      callback();
    } catch (error) {
      alert(error);
    }
  };
  fetchData(`${baseURL}/${id}`);
}
export async function post(item, callback) {
  const myInit = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, myInit);
      if (!response.ok) {
        throw new Error(`Error posting data: ${response.status}`);
      }
      const data = await response.json();
      callback(data);
      //   callback(data.record);
    } catch (error) {
      alert(error);
    }
  };
  fetchData(baseURL);
}

export async function put(id, item, callback) {
  const myInit = {
    method: "PUT",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, myInit);
      if (!response.ok) {
        throw new Error(`Error updating data: ${response.status}`);
      }
      const data = await response.json();
      callback(data);
      //   callback(data.record);
    } catch (error) {
      alert(error);
    }
  };
  fetchData(`${baseURL}/${id}`);
}

export async function getCustomerById(id, callback) {
  const myInit = {
    method: "GET",
    mode: "cors",
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, myInit);
      if (response.ok) {
        const data = await response.json();
        callback(data);
        // callback(data.record);
      } else if (response.status === 404) {
        // Not found
        callback(null);
      } else {
        throw new Error(`Error fetching data: ${response.status}`);
      }
    } catch (error) {
      alert(error);
    }
  };
  fetchData(`${baseURL}/${id}`);
}

export async function getNextId(callback) {
  const myInit = {
    method: "GET",
    mode: "cors",
  };
  const fetchData = async (url) => {
    try {
      const response = await fetch(url, myInit);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const data = await response.json();
      let maxid = 0;
      for (let item of data) {
        maxid = item.id > maxid ? item.id : maxid;
      }
      callback(maxid + 1);
    } catch (error) {
      alert(error);
    }
  };
  fetchData(baseURL);
}
