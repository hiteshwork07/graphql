const fetchUserApi = async () => {
    try {
        const url = 'https://gorest.co.in/public/v2/graphql';

        const data = '{"query":"query{users {pageInfo {endCursor startCursor hasNextPage hasPreviousPage} totalCount nodes {id name email gender status}}}"}';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 7bbc89ae56ff8d88f05d36609bc6a72f7ec47b9169fff5ff95e42defdef7843d',
            },
            body: data,
        });

        const text = await response.text();
        return text
    } catch (error) {
        console.log('error', error)
    }

}
const deleteUserApi = async ({
    id = '736'
}) => {
    try {
        const url = 'https://gorest.co.in/public/v2/graphql';

        const data = `{"query":"mutation{deleteUser(input: {id: ${id}}){user {id name email gender status}}}"}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 7bbc89ae56ff8d88f05d36609bc6a72f7ec47b9169fff5ff95e42defdef7843d',
            },
            body: data,
        });

        const text = await response.text();

        console.log(text);
        return text
    } catch (error) {
        console.log('error', error)
    }

}

const fetchUserByIdApi = async ({ id = '736' }) => {
    try {
        const url = 'https://gorest.co.in/public/v2/graphql';

        const data = `{"query":"query{user(id: ${id}) { id name email gender status }}"}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 7bbc89ae56ff8d88f05d36609bc6a72f7ec47b9169fff5ff95e42defdef7843d',
            },
            body: data,
        });

        const text = await response.text();

        return text
    } catch (error) {
        console.log('error', error)
    }

}
const createUserApi = async ({
    name = "Tenali Ramakrishna", gender = "male", email = "tenali.ramakrishna@15ce.com", status = "active"
}) => {

    try {
        const url = 'https://gorest.co.in/public/v2/graphql';

        const data = '{"query":"mutation{createUser(input: {name: "Tenalqwi Ramqwqkris2hna" gender: "male" email: "tenali.ramakriqwqwshna@1ece.com" status: "active"}) {user{id name gender email status}}}"}';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 7bbc89ae56ff8d88f05d36609bc6a72f7ec47b9169fff5ff95e42defdef7843d',
            },
            body: data,
        });

        const text = await response.text();

        console.log(text);
        return text
    } catch (error) {
        console.log('error', error)
    }

}
const updateUserApi = async ({
    id = "736",
    name = "Tenali Ramakrishna", gender = "male", email = "tenali.ramakrishna@15ce.com", status = "active"
}) => {
    try {
        const url = 'https://gorest.co.in/public/v2/graphql';

        const data = `{"query":"mutation{updateUser(input: {id: ${id} name: ${name} gender: "male" email: ${email} status: ${status}}) {user{id name gender email status}}}"}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 7bbc89ae56ff8d88f05d36609bc6a72f7ec47b9169fff5ff95e42defdef7843d',
            },
            body: data,
        });

        const text = await response.text();

        console.log(text);


        return text
    } catch (error) {
        console.log('error', error)
    }

}


export { fetchUserApi, fetchUserByIdApi, createUserApi, updateUserApi, deleteUserApi }