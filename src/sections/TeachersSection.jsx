import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container, SimpleGrid, Heading} from "@chakra-ui/react";
import TeacherCard from "../components/teacherCard/TeacherCard.jsx";

function TeachersSection(props){
    const [teachers, setTeachers] = useState([])
    const {title} = props
    useEffect(() => {
        (async()=>{
            const response = await axios.get("https://backend-dashboard.store/api/v1/teachers")
            const {data} = response.data
            setTeachers(data)
        })()
    }, []);
    return (
            <Container  maxW="4xl" p={4}>
                {title ? <Heading as='h3' size='md' noOfLines={1} pb={4}> { title } </Heading> : null}
                <SimpleGrid columns={3} spacing={10}>
                    {teachers.map((teacher) =>
                        (<Box key={crypto.randomUUID()}>
                            <TeacherCard teacher={teacher}/>
                        </Box>)
                    )}
                </SimpleGrid>
            </Container>
    )
}

export default TeachersSection