import axios from 'axios';

interface Task {
  task: string;
  total_minutes: number;
}

// axios.defaults.withCredentials = true;

export default async function createTask(taskData: Task) {
  try {
    const response = await axios.post('https://pomodoro-backend-dkty.onrender.com/api/task/tasks', taskData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials:true
    });
    console.log('Task created:', response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
    } else {
      console.error('Unexpected error:', error);
    }
  }
}
