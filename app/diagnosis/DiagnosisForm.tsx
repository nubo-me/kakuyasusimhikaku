'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DiagnosisResult {
  recommended: {
    brand: string;
    plan: string;
    monthlyPrice: number;
    realPrice: number;
    dataAmount: string;
    brandColor: string;
    reasons: string[];
  };
  alternatives: {
    brand: string;
    plan: string;
    monthlyPrice: number;
    realPrice: number;
    dataAmount: string;
    brandColor: string;
    reason: string;
  }[];
}

export default function DiagnosisForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    dataUsage: '',
    callFrequency: '',
    priority: '',
    support: '',
    budget: '',
    esim: ''
  });
  const [result, setResult] = useState<DiagnosisResult | null>(null);

  const questions = [
    {
      step: 1,
      title: 'データ使用量について',
      question: '月間のデータ使用量はどのくらいですか？',
      icon: 'ri-database-line',
      options: [
        { value: 'light', label: '3GB未満', description: 'メール・SNS・軽いネット閲覧' },
        { value: 'medium', label: '3GB〜10GB', description: '動画視聴・音楽ストリーミング' },
        { value: 'heavy', label: '10GB〜20GB', description: '頻繁な動画視聴・ゲーム' },
        { value: 'unlimited', label: '20GB以上', description: 'テザリング・大容量通信' }
      ]
    },
    {
      step: 2,
      title: '通話について',
      question: '電話をかける頻度はどのくらいですか？',
      icon: 'ri-phone-line',
      options: [
        { value: 'none', label: 'ほとんどしない', description: 'LINEやメールが中心' },
        { value: 'light', label: '月30分程度', description: '短い通話が時々' },
        { value: 'medium', label: '月1時間程度', description: '定期的に通話する' },
        { value: 'heavy', label: '月2時間以上', description: '仕事やプライベートで頻繁に通話' }
      ]
    },
    {
      step: 3,
      title: '重視するポイント',
      question: '最も重視するポイントは何ですか？',
      icon: 'ri-star-line',
      options: [
        { value: 'price', label: '料金の安さ', description: '月額料金を最重視' },
        { value: 'speed', label: '通信速度', description: '快適な通信品質を重視' },
        { value: 'stability', label: '安定性', description: 'つながりやすさを重視' },
        { value: 'features', label: '特典・サービス', description: 'キャンペーンや付加サービス重視' }
      ]
    },
    {
      step: 4,
      title: 'サポートについて',
      question: 'サポート体制の希望はありますか？',
      icon: 'ri-customer-service-line',
      options: [
        { value: 'online', label: 'オンラインのみでOK', description: 'Web・チャット・電話サポート' },
        { value: 'mixed', label: 'たまに店舗も利用したい', description: '基本オンライン＋店舗も選択肢' },
        { value: 'store', label: '店舗サポート重視', description: '困った時は店舗で相談したい' }
      ]
    },
    {
      step: 5,
      title: '予算について',
      question: '月額の予算はどのくらいですか？',
      icon: 'ri-money-dollar-circle-line',
      options: [
        { value: 'low', label: '1,500円以下', description: '最安を重視' },
        { value: 'medium', label: '1,500円〜3,000円', description: 'バランス重視' },
        { value: 'high', label: '3,000円〜5,000円', description: '品質重視' },
        { value: 'premium', label: '5,000円以上でもOK', description: 'サービス・サポート重視' }
      ]
    },
    {
      step: 6,
      title: 'eSIMについて',
      question: 'eSIM（即日開通）を希望しますか？',
      icon: 'ri-smartphone-line',
      options: [
        { value: 'required', label: 'eSIM必須', description: '即日で使い始めたい' },
        { value: 'prefer', label: 'eSIM希望', description: 'できればeSIMがいい' },
        { value: 'either', label: 'どちらでもOK', description: '物理SIMでも構わない' },
        { value: 'physical', label: '物理SIM希望', description: '従来のSIMカードがいい' }
      ]
    }
  ];

  const handleAnswer = (questionKey: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionKey]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateResult = () => {
    // 診断ロジック
  let recommended: any;
  let alternatives: any[] = [];

    // データ使用量別の基本推奨
    if (answers.dataUsage === 'light') {
      if (answers.priority === 'price' || answers.budget === 'low') {
        recommended = {
          brand: 'LINEMO',
          plan: 'ベストプラン',
          monthlyPrice: 990,
          realPrice: 490,
          dataAmount: '～10GB',
          brandColor: 'text-pink-600',
          reasons: [
            '月10GB以下で最安クラスの料金',
            'ソフトバンク回線で通信品質が安定',
            'LINEギガフリーで実質容量アップ',
            '通話オプション割引キャンペーン'
          ]
        };
        alternatives = [
          {
            brand: 'povo2.0',
            plan: 'データ追加3GB',
            monthlyPrice: 990,
            realPrice: 990,
            dataAmount: '3GB（30日）',
            brandColor: 'text-purple-600',
            reason: '使った分だけの従量制で無駄がない'
          },
          {
            brand: 'IIJmio',
            plan: 'ギガプラン 5GB',
            monthlyPrice: 990,
            realPrice: 1301,
            dataAmount: '5GB',
            brandColor: 'text-blue-500',
            reason: '少し多めの容量で安心'
          }
        ];
      } else {
        recommended = {
          brand: 'UQモバイル',
          plan: 'コミコミプランバリュー',
          monthlyPrice: 3828,
          realPrice: 2728,
          dataAmount: '35GB',
          brandColor: 'text-orange-600',
          reasons: [
            '店舗サポートが充実',
            '10分かけ放題込みでお得',
            'au回線で高品質通信',
            '家族割・セット割でさらに安く'
          ]
        };
        alternatives = [
          {
            brand: 'ワイモバイル',
            plan: 'シンプルS',
            monthlyPrice: 2178,
            realPrice: 1628,
            dataAmount: '3GB',
            brandColor: 'text-red-600',
            reason: '店舗サポートあり・家族割適用'
          }
        ];
      }
    } else if (answers.dataUsage === 'medium') {
      if (answers.priority === 'speed' || answers.priority === 'stability') {
        recommended = {
          brand: 'ahamo',
          plan: '基本プラン',
          monthlyPrice: 2970,
          realPrice: 2970,
          dataAmount: '30GB',
          brandColor: 'text-green-600',
          reasons: [
            'ドコモ回線で最高レベルの通信品質',
            '5分かけ放題が標準で込み',
            '海外でもそのまま利用可能',
            '大容量通信でも安定した速度'
          ]
        };
        alternatives = [
          {
            brand: 'UQモバイル',
            plan: 'コミコミプラン',
            monthlyPrice: 3278,
            realPrice: 2178,
            dataAmount: '20GB',
            brandColor: 'text-orange-600',
            reason: '店舗サポート＋au回線品質'
          }
        ];
      } else {
        recommended = {
          brand: 'LINEMO',
          plan: 'スマホプラン',
          monthlyPrice: 2728,
          realPrice: 1628,
          dataAmount: '20GB',
          brandColor: 'text-pink-600',
          reasons: [
            '20GBで料金が安い',
            'LINEギガフリーで実質無制限',
            '6ヶ月間基本料無料',
            'ソフトバンク回線で高品質'
          ]
        };
      }
    } else if (answers.dataUsage === 'heavy' || answers.dataUsage === 'unlimited') {
      recommended = {
        brand: 'ahamo',
        plan: '大盛りオプション',
        monthlyPrice: 4950,
        realPrice: 4950,
        dataAmount: '100GB',
        brandColor: 'text-green-600',
        reasons: [
          '大容量100GBで思う存分利用',
          'ドコモ回線で大容量でも高速',
          'テザリングも無制限',
          '5分かけ放題込みでお得'
        ]
      };
      alternatives = [
        {
          brand: 'UQモバイル',
          plan: 'コミコミプラン',
          monthlyPrice: 3278,
          realPrice: 2178,
          dataAmount: '20GB',
          brandColor: 'text-orange-600',
          reason: '20GBで十分ならより安価'
        }
      ];
    }

    // eSIM要求の調整
    if (answers.esim === 'required' && recommended && !['LINEMO', 'ahamo', 'povo2.0', 'UQモバイル'].includes(recommended.brand)) {
      recommended = {
        brand: 'LINEMO',
        plan: 'ミニプラン',
        monthlyPrice: 990,
        realPrice: 490,
        dataAmount: '3GB',
        brandColor: 'text-pink-600',
        reasons: [
          'eSIM対応で即日開通可能',
          'ソフトバンク回線で高品質',
          'LINEギガフリー対応',
          '最安クラスの料金'
        ]
      };
    }

    setResult({ recommended: recommended!, alternatives });
  };

  const getCurrentQuestion = () => {
    return questions[currentStep - 1];
  };

  const getAnswerKey = () => {
    const keyMap = ['dataUsage', 'callFrequency', 'priority', 'support', 'budget', 'esim'];
    return keyMap[currentStep - 1] as keyof typeof answers;
  };

  const currentQuestion = getCurrentQuestion();
  const answerKey = getAnswerKey();
  const progress = (currentStep / questions.length) * 100;

  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Results Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-700 mb-6">
              <i className="ri-check-double-line text-xl mr-3"></i>
              <span className="font-semibold">診断完了</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              あなたにおすすめの格安SIM
            </h1>
            <p className="text-xl text-gray-600">
              6つの質問からあなた専用プランを診断しました
            </p>
          </div>

          {/* Recommended Plan */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-green-200 mb-8 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full font-bold">
              <i className="ri-award-line mr-2"></i>
              最適プラン
            </div>

            <div className="text-center mb-8 mt-4">
              <div className={`text-4xl font-bold ${result.recommended.brandColor} mb-2`}>
                {result.recommended.brand}
              </div>
              <div className="text-2xl font-semibold text-gray-800 mb-4">
                {result.recommended.plan}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">月額料金</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {result.recommended.monthlyPrice.toLocaleString()}円
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">実質料金</div>
                  <div className="text-2xl font-bold text-green-600">
                    {result.recommended.realPrice.toLocaleString()}円
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">データ容量</div>
                  <div className="text-2xl font-bold text-blue-600">
                    {result.recommended.dataAmount}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4 text-gray-900">
                <i className="ri-lightbulb-line mr-2 text-yellow-500"></i>
                おすすめの理由
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.recommended.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <i className="ri-check-line text-green-500 mr-2 mt-1 flex-shrink-0"></i>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/brands/${result.recommended.brand.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                className={`bg-gradient-to-r ${result.recommended.brandColor.includes('pink') ? 'from-pink-600 to-red-600' : 'from-blue-600 to-purple-600'} text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center whitespace-nowrap`}
              >
                詳細を確認して申し込む
              </Link>
              <Link 
                href="/compare"
                className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors text-center whitespace-nowrap"
              >
                他プランと比較する
              </Link>
            </div>
          </div>

          {/* Alternative Plans */}
          {result.alternatives.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                その他の候補プラン
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {result.alternatives.map((alt, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className={`text-xl font-bold ${alt.brandColor} mb-2`}>
                      {alt.brand}
                    </div>
                    <div className="text-lg font-semibold text-gray-800 mb-4">
                      {alt.plan}
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className="text-sm text-gray-500">実質料金</div>
                        <div className="text-lg font-bold text-green-600">
                          {alt.realPrice.toLocaleString()}円/月
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">データ容量</div>
                        <div className="text-lg font-bold text-blue-600">
                          {alt.dataAmount}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{alt.reason}</p>

                    <Link 
                      href={`/brands/${alt.brand.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                      className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-colors"
                    >
                      詳細を見る
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <button 
              onClick={() => {
                setCurrentStep(1);
                setAnswers({
                  dataUsage: '',
                  callFrequency: '',
                  priority: '',
                  support: '',
                  budget: '',
                  esim: ''
                });
                setResult(null);
              }}
              className="text-blue-600 hover:text-blue-700 font-semibold mr-6"
            >
              <i className="ri-refresh-line mr-2"></i>
              もう一度診断する
            </button>
            <Link 
              href="/guide/mnp"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              <i className="ri-guide-line mr-2"></i>
              乗り換え手順を確認
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Progress Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">格安SIM診断</h1>
            <span className="text-sm text-gray-500">
              {currentStep} / {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-center text-gray-600">
            あなたに最適な格安SIMプランを診断します
          </p>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
              <i className={`${currentQuestion.icon} text-2xl text-blue-600`}></i>
            </div>
            <h2 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
              {currentQuestion.title}
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {currentQuestion.question}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(answerKey, option.value)}
                className={`p-6 text-left rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  answers[answerKey] === option.value
                    ? 'border-blue-500 bg-blue-50 shadow-lg transform scale-105'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    answers[answerKey] === option.value
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {answers[answerKey] === option.value && (
                      <i className="ri-check-line text-white text-sm"></i>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-lg text-gray-900 mb-1">
                      {option.label}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {option.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <i className="ri-arrow-left-line mr-2"></i>
              前へ
            </button>

            <button
              onClick={nextStep}
              disabled={!answers[answerKey]}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                answers[answerKey]
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentStep === questions.length ? (
                <>
                  <i className="ri-search-line mr-2"></i>
                  診断結果を見る
                </>
              ) : (
                <>
                  次へ
                  <i className="ri-arrow-right-line ml-2"></i>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Help Text */}
        <div className="text-center text-gray-500 text-sm">
          <p>診断は約2分で完了します。個人情報の入力は不要です。</p>
        </div>
      </div>
    </div>
  );
}