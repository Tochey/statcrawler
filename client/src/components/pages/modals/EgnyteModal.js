import React, { useState } from "react";
import EgnyteService from "../services/Egnyte";


export default function EgnyteModal() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        className="bg-green-500 active:bg-green-500 
            font-bold px-6 py-3 shadow hover:shadow-md outline-none mr-1 mb-1"
        type="button"
        onClick={() => setModalOpen(true)}
      >
        full status
      </button>
      {modalOpen ? (
        <>
          {/* the modal box */}
        <div className="w-screen overflow-auto fixed inset-0 z-50 bg-black/50">
            <div className="w-6/12 bg-white rounded-md my-[80px] mx-auto">
             <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="p-5 border-b border-slate-200 rounded-t">
                  <h3 className="text-lg flex justify-center font-semibold">Egnyte Service Status</h3>
                </div>
                <div className="w-full text-slate-500 text-lg leading-relaxed">
                  <EgnyteService/>
                </div> 
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div> 
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}


