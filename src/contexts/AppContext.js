import { data } from "../api/data";

const { createContext, useContext, useState } = require("react");

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [displayProps, setDisplayProps] = useState({
        isFormVisible:false,
        isEdit:false,
        isHabitDetailsVisible:false,
    })

    const initialHabitFormData = {
        id:"",
        name:"",
        repeat:"",
        goal:"",
        timeOfDay:"",
        startDate:"",
    }

    const [habitList, setHabitList] = useState(data);
    const [habitFormData, setHabitFormData] = useState(initialHabitFormData)
    const [habitDetailsData, setHabitDetailsData] = useState({});


    const addHabitHandler = (habitFormData) => {

        console.log(habitFormData)
        const habitIndex = habitList.findIndex((item) => item.name === habitFormData.name)

        if( habitIndex === -1){
            setHabitList([...habitList, {...habitFormData}])
            console.log(habitList);
        } else {
            alert("Habit Already Exists!")
        }
    }

  

    const editHabit = (habit) => {
        setHabitList(habitList.map((item) => item.id === habit.id ? habit : item))
    }

    // const deleteHandler = (habitID) => setHabitList(habitList.filter((item) => item.id !== habitID))

    const deleteHandler = (habitID) => {
        const updatedList = habitList.filter((item) => item.id !== habitID)

        setHabitList(updatedList);
    }


    const archiveHandler = (habitID) => {
        let updatedList = habitList.map((item) => item.id === habitID ?{...item, archive: !item.archive }: item)

        setHabitList(updatedList);
    }


    const archiveListData = habitList.filter((item) => item.archive )

    const unarchiveListData = habitList.filter((item) => !item.archive)






    return(
       <AppContext.Provider value={{
        displayProps, 
        setDisplayProps,
        habitList,
        setHabitList,
        habitFormData,
        setHabitFormData,
        deleteHandler,
        archiveHandler,
        addHabitHandler,
        archiveListData,
        unarchiveListData,
        editHabit,
        habitDetailsData,
        setHabitDetailsData,
        }}>
        {children}
       </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);