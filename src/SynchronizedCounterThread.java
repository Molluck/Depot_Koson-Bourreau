
class SynchronizedCounter{
	private int counter = 0;
	
	public synchronized void increment() {
			counter++;
	}
		
	public synchronized void decrement() {
			counter--;
	}
		
	public synchronized int value() {
			return counter;
	}	
}

public class SynchronizedCounterThread implements Runnable{
		private SynchronizedCounter counter;
		private int N;
		
	
		public SynchronizedCounterThread(SynchronizedCounter counter, int N) {
			this.counter = counter;
			this.N = N;
		}


		public void run() {
			for(int i=0; i < N; i++) {
				counter.increment();
			}
		}
		
		public static void main(String args[]) throws InterruptedException{
			SynchronizedCounter counter = new SynchronizedCounter();
			System.out.println("Valeur initiale pour counter: " + counter.value());

			SynchronizedCounterThread sct1 = new SynchronizedCounterThread(counter, 10000);
			Thread t1 = new Thread(sct1);
			SynchronizedCounterThread sct2 = new SynchronizedCounterThread(counter, 10000);
			Thread t2 = new Thread(sct2);
			
			t1.start();
			t2.start();
			
			t2.join();
			t1.join();
			
			System.out.println("Valeur finale pour counter: " + counter.value());
			
		}
}
