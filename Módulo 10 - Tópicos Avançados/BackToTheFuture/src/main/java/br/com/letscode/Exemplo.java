/*
package br.com.letscode;


import io.reactivex.rxjava3.core.Observable;
import io.reactivex.rxjava3.core.Observer;
import org.reactivestreams.Subscriber;

public class Exemplo {
    static Observable<Integer> observable = Observable.create(
            new Observable.onSubscribe<Integer>() {
                @Override
                public void call(Subscriber<? super Integer> subscriber) {
                    for (int i = 0; i < 5; i++) {
                        subscriber.onNext(i);
                    }
                    subscriber.onCompleted();
                }
            }
    )

    public static void main(String[] args) {
        observable.subscribe(
                new Observer<Integer>() {
                    @Override public void onCompleted() {
                        System.out.println("Finalizou");
                    }

                    @Override
                    public void onError(Throwable e) {
                        System.out.println("Erro: " + e);
                    }

                    @Override
                    public void onNext(Integer integer) {

                    }
                }



    }

}
*/