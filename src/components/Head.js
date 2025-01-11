import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";

const Head = () => {
    const dispatch = useDispatch();
    const [ searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        getSearchSuggetions();
    }, [searchQuery]);

    const getSearchSuggetions = async () => {
        const data = await fetch(YOUTUBE_SUGGESTIONS_API+searchQuery);
        const json = await data.json();

        console.log('====================================');
        console.log(json, 'json');
        console.log('====================================');
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    
    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-md">
            <div className="flex col-span-1">
                <img 
                    onClick={() => toggleMenuHandler()}
                    className="h-8"
                    alt="menu"
                    src="data:image/jpeg;base64,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"
                />
                <img
                    className="h-8 mx-2"
                    alt="logo"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAdVBMVEX/AAD/////oKD/+vr/3Nz/W1v/XV3/hIT/V1f/8/P/9vb/5ub/4OD/Y2P/4+P/iIj/tLT/6+v/wMD/q6v/j4//k5P/0dH/xcX/mJj/cXH/RET/Hh7/EBD/sLD/NDT/p6f/d3f/aWn/PDz/fn7/TEz/LS3/JiYKMV6QAAAFDUlEQVR4nO2d6XaqMBRGG4IDRJFBmawSq/X9H/EmWL3WoQ7k5ISs7L9dhbMXCCae5PsgFvGBXYBKnIypOBlTcTKm4mRMxcmYipMxFSdjKk7GVJyMqTgZU3EyptJRhgrCMAyOJAljLJq0+PcRf40ixpIkOf2nOIo4FrhMKEuMosjP87xI0ziOV6ssy5rG88rFYj6fSUYtW86rarOZtgyGgvEvhkem082mqjjn28M/tseYzxdl6XmZZLWK4zQtijz3xamFdhB2lAnyeDEb8Z/yBuNd/bX+3i+Xn4IPSOQJlvvv9Ve9Gw/kuYU6H80WcR68J5PEfFp/g9b8Mt/1dLtiL8sUVb3HLv02+5oXL8mkNext1JHPOn1aJl9iV/uYz/wpmYRjF/ocPHkoQ1NDPyrX7NPLp/WFTFL24BY78rlI/pKJOHaBr8Gj+zLRFLu6V9lE92TYALu21xmw2zLhGLuydxiHN2V6eF0kw1syC+yq3mVxLVNg1/Q+xaVM0Jt35TX74EJmhF1RF0a/ZYo1dkFdWBfnMmGFXU83Knomk/b6wohLk/6XCXv9iZGMwpNMXmMX05U6P8k02LV0pznKsJ5//CVV8iPThzH/I5b5j0yMXYkK0oNMMMMuRAWzoJVhvRzHXDJmrYyPXYca/FYmxy5DDXkrk2KXoYZUytAMuww1ZFTKWPD+lzStjIddhho8J2MoTsZUnMwjsH4NBZHZeRu1B3wSEJnhJMkw2gdAZAY+oQxhiAQlQwidfKk96mPgZITOSvOTAFKGkHCmVQdWRgz7NhrnfaBlCFkN1R78D+BlSFLu1B7+LhpkxL020/OjnBYZQlOu9gy30SMjmwo13Gu6ZAiJSvDHtD4ZQsH7cjTKEPBOA70yhIAOA3XLEMbhHtPaZcS9NoX6hoMgQ4IG6BcUDBlC/BJkIIojI+61rdpTtmDJkCBV36mHJiOea5nqDhdEGUKZ4h4XTBlBrnTSA1lGDEQVfv1ElyF0q+wxjS8jJz0UfcMxQYbQ1VDJzWaEjBi5NSoGoobIEF/FK9QMmcAbq7jPjJBJh2oGBQbIJKoeZgbIKFxNgS1TqJx/QpWhvtrJJ0wZ5dOCeDIAE7ZYMjQF6KRGksnnEBPPKDKshFl5gCBDV0q+u9xAv0wONqGpXYaOAH+l0SwD26arU4b6wEvB9MlQH3wlmDYZ1sCv0NMkE8Q6+jT0yBRcS0OQDpnJSFPnGbwM9XS1zsDLpAN9LWfAMkmls3sOVCbU3PwNKBMWuhd/gsmEvv5GbRiZCZmUag/5FDAyhY7usmtAZNZQQ8kHuCUnpuJkTMXJmIpn33JgmxZqW7WE3q7NDazadsKqDUGs2qrFqk107NreyKqNp6zaEsyuzdqs2kbPqg0OCe35I6AKz2Ss2hTUru1aSWBY0MQrXG2ka9UWx3ZtPk2IvqX7ShmQWzJWbdhOWA+vzfg8GOB3yAHOXj4dmE7IPRnCINYcAvJX/IR43VgUDCIbW3vz9nwY2SIvDseu8jmeCNOR9GFO4MmYI4lFAVSSglsTDSZJ4q2JoW38jdC2FnqK09ucx+npSdM7j9PbdI3TO3EWdFi0QYdtzmGWeV5ZXuUcHoMOj4mGVzmHg0MK4iHncHuRc7goPa9pfnIOZdBhri7o8DFXCZQJE95/BlAe8ikPCZTBRQIlfARlf3AypuJkTMXJmIqTMRUnYypOxlScjKk4GVNxMqbiZEzFyZiKVTL/APt0d44fmPwOAAAAAElFTkSuQmCC"
                />
            </div>
            <div className="col-span-10 px-10">
                <input 
                    type="text" 
                    className="w-1/2 border border-gray-400 p-2 rounded-l-full" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="border border-gray-400 p-2 rounded-r-full bg-slate-200">Search</button>
            </div>
            <div className="col-span-1">
                <img 
                    className="h-8"
                    alt="user"
                    src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                />
            </div>
        </div>
    )
}

export default Head;