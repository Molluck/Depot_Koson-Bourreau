

public class PingPongRunnable implements Runnable {
	private String nom;
	private int nb;
	
	public PingPongRunnable(String nom, int nb) {
		this.nom = nom;
		this.nb = nb;
	}
	
	static void threadMessage(String message) {
		String threadName = Thread.currentThread().getName();
		System.out.format("%s: %s%n", threadName, message);
	}
	

	public void run() {
		try {
			for(int i = 0; i < this.nb; i++) {
				Thread.sleep((long)Math.random() * 1000);
				System.out.println(this.nom);
			}
		}
		catch(InterruptedException e) {
			threadMessage("Erreur");
		}
		
	}

	public static void main(String args[]) {
		(new Thread(new PingPongRunnable("ping", 10))).start();
		(new Thread(new PingPongRunnable("pong", 10))).start();
	}

}