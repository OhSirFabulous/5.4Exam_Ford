import React from 'react';
const CensusForm=()=>{
    return(
        <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-normal mb-6">Add New Census</h1>
        <form className="space-y-4">
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">address</label>
                <input
                    type="text"
                    id="adress"
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue="30 County Road 10"
                    />
            </div>
            <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">city</label>
                <input
                    type="text"
                    id="city"
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue="Grand Junction"
                    />
            </div>
            <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">state</label>
                <input
                    type="text"
                    id="state"
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue="CO"
                    />
            </div>
            <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">zip</label>
                <input
                    type="text"
                    id="zip"
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue="55111"
                    />
            </div>
            <div>
                <label htmlFor="people" className="block text-sm font-medium text-gray-700 mb-1">Number of people</label>
                <input
                    type="number"
                    id="people"
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue="3"
                    />
            </div>
            <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <input
                    type="number"
                    id="year"
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue="2019"
                    />
            </div>
            <div>
                <label htmlFor="taker" className="block text-sm font-medium text-gray-700 mb-1">Census Taker</label>
                <input
                    type="text"
                    id="taker"
                    className="w-full p-2 border border-gray-300 rounded"
                    defaultValue="Judy"
                    />
            </div>
            <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >Save</button>
        </form>
        </div>
    );
};
export default CensusForm;